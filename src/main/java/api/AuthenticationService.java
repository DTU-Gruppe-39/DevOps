package api;

import controller.ControllerRegistry;
import controller.interfaces.AuthenticationController;
import data.DTO.LoginDetails;
import data.DTO.User;

import javax.ws.rs.*;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

/**
 * Created by magnus
 */
@Path("authentication")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuthenticationService {
  @Context
  ContainerRequestContext container;

  private AuthenticationController authenticationController = ControllerRegistry.getAuthenticationController();

  @POST
  @Path("login")
  public String login(LoginDetails loginDetails) {
    return authenticationController.login(loginDetails);
  }

  @GET
  @Path("validate")
  public User validate() {
      return authenticationController.validate((String) container.getProperty("id"));
  }
}
