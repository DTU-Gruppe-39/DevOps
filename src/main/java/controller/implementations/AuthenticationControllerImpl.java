package controller.implementations;

import controller.interfaces.AuthenticationController;
import data.DTO.LoginDetails;
import data.DTO.User;
import util.JWTutil;

import javax.ws.rs.NotAuthorizedException;

/**
 * Created by magnus
 */
public class AuthenticationControllerImpl implements AuthenticationController {
  @Override
  public String login(LoginDetails loginDetails) {
    User user = validateLoginDetails(loginDetails);
    if (user != null) {
      return JWTutil.generateToken(user);
    }
    else
      throw new NotAuthorizedException("Login failed, wrong username or password");
  }

  private User validateLoginDetails (LoginDetails loginDetails) {
    return null;
  }
}
