package controller.implementations;

import com.mongodb.MongoException;
import controller.ControllerRegistry;
import controller.interfaces.AuthenticationController;
import controller.interfaces.UserController;
import data.DTO.LoginDetails;
import data.DTO.User;
import util.JWTutil;

import javax.ws.rs.NotAuthorizedException;

/**
 * Created by magnus
 */
public class AuthenticationControllerImpl implements AuthenticationController {
  private UserController userController = ControllerRegistry.getUserController();

  @Override
  public String login(LoginDetails loginDetails) {
    User user = validateLoginDetails(loginDetails);
    if (user != null) {
      return JWTutil.generateToken(user);
    }
    else
      throw new NotAuthorizedException("Login failed, wrong username or password");
  }

  @Override
  public User validate(String token) {
    return userController.get(JWTutil.getUserId(token));
  }


  private User validateLoginDetails (LoginDetails loginDetails) {
    try {
      return null;
      //return userDocumentI.validateLogin(loginDetails);
    } catch (MongoException mongoException) {
      throw new NotAuthorizedException("Wrong username or password");
    }
  }
}
