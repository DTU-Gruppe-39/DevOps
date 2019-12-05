package controller;

import controller.implementations.*;
import controller.interfaces.*;


/**
 * Created by magnus
 */
public class ControllerRegistry {
  private static AuthenticationController authenticationController;
  private static TaskController taskController;
  private static StakeholderController stakeholderController;
  private static UsecaseController usecaseController;
  private static UserController userController;
  private static MusicController musicController;
  private static ProjectController projectController;


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

  public static UserController getUserController () {
    if(userController == null) userController = new UserControllerImpl();
    return userController;

  }

  public static MusicController getMusicController () {
    if (musicController == null) musicController = new MusicControllerImpl();
    return musicController;
  }

  public static ProjectController getProjectController () {
    if (projectController == null) projectController = new ProjectControllerImpl();
    return projectController;
  }
}


