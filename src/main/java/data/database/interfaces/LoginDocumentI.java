package data.database.interfaces;

import data.DTO.LoginDetails;
import data.DTO.User;

/**
 * Created by magnus
 */
public interface LoginDocumentI {
  User validateLogin(LoginDetails loginDetails);
}
