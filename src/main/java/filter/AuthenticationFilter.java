package filter;

import api.Secured;

import javax.annotation.Priority;
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
      validate(httpHeader, container);
    }
  }

  //validating JWT and saving user id to be used later on
  private void validate (String httpHeader, ContainerRequestContext container) {
    //Splitting Bearer from the JWT
    String[] jwt = httpHeader.split(" ");
    if (jwt[1] !=  null) {

    }
  }
}
