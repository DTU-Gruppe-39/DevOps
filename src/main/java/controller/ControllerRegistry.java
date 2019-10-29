package controller;

import controller.implementations.AuthenticationControllerImpl;
import controller.interfaces.AuthenticationController;

/**
 * Created by magnus
 */
public class ControllerRegistry {
  private static AuthenticationController authenticationController;

  public static AuthenticationController getAuthenticationController () {
    if (authenticationController == null) authenticationController = new AuthenticationControllerImpl();
    return authenticationController;
  }
}
