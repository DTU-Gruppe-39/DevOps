package controller.interfaces;

import data.DTO.LoginDetails;
import data.DTO.User;

/**
 * Created by magnus
 */
public interface AuthenticationController {
  String login (LoginDetails loginDetails);
  User validate (String token);
}
