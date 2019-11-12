package controller;

import controller.implementations.AuthenticationControllerImpl;
import controller.implementations.TaskControllerImpl;
import controller.interfaces.AuthenticationController;
import controller.interfaces.TaskController;

/**
 * Created by magnus
 */
public class ControllerRegistry {
  private static AuthenticationController authenticationController;
  private static TaskController taskController;

  public static AuthenticationController getAuthenticationController () {
    if (authenticationController == null) authenticationController = new AuthenticationControllerImpl();
    return authenticationController;
  }

  public static TaskController getTaskController () {
    if (taskController == null) taskController = new TaskControllerImpl();
    return taskController;
  }
}
