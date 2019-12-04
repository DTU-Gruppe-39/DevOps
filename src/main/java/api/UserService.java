package api;

import controller.ControllerRegistry;
import controller.interfaces.UserController;
import data.DTO.NewUser;
import data.DTO.Role;
import data.DTO.User;

import javax.ws.rs.*;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by magnus
 */

@Path("user")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserService {
  @Context
  ContainerRequestContext container;
  private UserController userController = ControllerRegistry.getUserController();

  @POST
  public void postUser(NewUser newUser) {
    userController.add(newUser.getUser(), newUser.getLoginDetails());
  }

  @GET
  @Secured({Role.Developer, Role.ProjectManager})
  public List<User> getUsers() {
    return userController.getAll();
  }

  @GET
  @Path("current")
  @Secured({Role.Developer, Role.ProjectManager})
  public User getUser() {
    return userController.get((String) container.getProperty("id"));
  }

  @PUT
  @Secured({Role.Developer, Role.ProjectManager})
  public void putUser(User user) {
    throw new InternalServerErrorException("Not implemented yet");
  }

  @DELETE
  @Secured({Role.Developer, Role.ProjectManager})
  public void deleteUser(String id) {
    userController.delete(id);
  }
}
