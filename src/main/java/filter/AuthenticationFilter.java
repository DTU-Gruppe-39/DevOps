package filter;

import api.Secured;
import data.DTO.Role;
import io.jsonwebtoken.Claims;
import util.JWTutil;

import javax.annotation.Priority;
import javax.ws.rs.ForbiddenException;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.ext.Provider;
import java.io.IOException;

/**
 * Created by magnus
 */
//Value is 1000
@Priority(Priorities.AUTHENTICATION)
@Provider
public class AuthenticationFilter implements ContainerRequestFilter {
  //Send by the client which should include the JWT if the client has login in
  @Context
  HttpHeaders httpHeaders;
  //Get the level of security from Secured annotation
  @Context
  ResourceInfo resourceInfo;

  @Override
  public void filter(ContainerRequestContext container) throws IOException {
    //For test purposes
    if (System.getenv("LOGIN").equals("false")) {
      return;
    }

    //First checks the security set by method level
    Secured secured = resourceInfo.getResourceMethod().getAnnotation(Secured.class);
    if (secured == null)
      //No method level security, then checks
      secured = resourceInfo.getResourceClass().getAnnotation(Secured.class);
    if (secured == null)
      //No class level security, then go out of filter
      return;

    //Declaring httpheader
    String httpHeader = httpHeaders.getHeaderString(httpHeaders.AUTHORIZATION);
    if (httpHeader == null)
      throw new NotAuthorizedException("You are not authorized for this service");
    else {
      //validating json web token
      validate(httpHeader, secured, container);
    }
  }

  //validating JWT and saving user id to be used later on
  private void validate (String httpHeader, Secured secured, ContainerRequestContext container) {
    //Splitting Bearer from the JWT
    String[] jwt = httpHeader.split(" ");
    if (jwt[1] !=  null) {
      //Validating JWT and getting claims if valid
      Claims claims = JWTutil.parseToken(jwt[1]);
      String userid = (String) claims.get("id");
      Role userrole = Role.valueOf((String) claims.get("role"));
      String useremail = (String) claims.getSubject();
      container.setProperty("token",jwt[1]);
      container.setProperty("id", userid);
      container.setProperty("role", userrole);
      container.setProperty("email", useremail);

      //Check if user has the required role
      if (checkRole(secured, container, userrole)) {
        return;
      }
      else {
        throw new ForbiddenException("Your role does not fit the required role");
      }
    }
    else {
      throw new NotAuthorizedException("");
    }
  }

  private boolean checkRole (Secured secured, ContainerRequestContext container, Role userrole) {
    for (Role role : secured.value()) {
      if (role.equals(userrole))
        return true;
    }
    return false;
  }
}
