package api;

import controller.ControllerRegistry;
import controller.interfaces.UserController;
import data.DTO.User;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by magnus
 */

@Path("user")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserService {
  private UserController userController = ControllerRegistry.getUserController();

  @POST
  public void postUser(User user) {
    userController.add(user);
  }

  @GET
  public List<User> getUsers() {
    return userController.getAll();
  }

  @PUT
  public void putUser(String id, User user) {
    userController.update(id, user);
  }

  @DELETE
  public void deleteUser(String id) {
    userController.delete(id);
  }
}
