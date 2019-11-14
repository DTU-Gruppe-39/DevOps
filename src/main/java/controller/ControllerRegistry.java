package controller;

import controller.implementations.AuthenticationControllerImpl;
import controller.implementations.StakeholderControllerImpl;
import controller.implementations.TaskControllerImpl;
import controller.implementations.UserControllerImpl;
import controller.interfaces.AuthenticationController;
import controller.interfaces.StakeholderController;
import controller.interfaces.TaskController;
import controller.interfaces.UserController;

/**
 * Created by magnus
 */
public class ControllerRegistry {
  private static AuthenticationController authenticationController;
  private static TaskController taskController;
  private static StakeholderController stakeholderController;
  private static UserController userController;

  public static AuthenticationController getAuthenticationController () {
    if (authenticationController == null) authenticationController = new AuthenticationControllerImpl();
    return authenticationController;
  }

  public static TaskController getTaskController () {
    if (taskController == null) taskController = new TaskControllerImpl();
    return taskController;
  }

  public static StakeholderController getStakeholderController () {
    if (stakeholderController == null) stakeholderController = new StakeholderControllerImpl();
    return stakeholderController;
  }

  public static UserController getUserController () {
    if(userController == null) userController = new UserControllerImpl();
    return userController;
  }
}
