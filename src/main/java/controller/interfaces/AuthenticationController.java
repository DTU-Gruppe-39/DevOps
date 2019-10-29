package controller.interfaces;

import data.DTO.LoginDetails;

/**
 * Created by magnus
 */
public interface AuthenticationController {
  String login (LoginDetails loginDetails);
}
