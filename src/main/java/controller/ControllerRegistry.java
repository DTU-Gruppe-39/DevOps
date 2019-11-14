package controller;

import controller.implementations.AuthenticationControllerImpl;
import controller.implementations.StakeholderControllerImpl;
import controller.implementations.TaskControllerImpl;
import controller.implementations.UsecaseControllerImpl;
import controller.interfaces.AuthenticationController;
import controller.interfaces.StakeholderController;
import controller.interfaces.TaskController;
import controller.interfaces.UsecaseController;
import data.DTO.Stakeholder;

/**
 * Created by magnus
 */
public class ControllerRegistry {
  private static AuthenticationController authenticationController;
  private static TaskController taskController;
  private static StakeholderController stakeholderController;
  private static UsecaseController usecaseController;

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

  public static UsecaseController getUsecaseController () {
    if (usecaseController == null) usecaseController = new UsecaseControllerImpl();
    return usecaseController;
  }
}
