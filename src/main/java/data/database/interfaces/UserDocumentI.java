package data.database.interfaces;

import data.DTO.LoginDetails;
import data.DTO.User;

/**
 * Created by magnus
 */
public interface UserDocumentI extends CollectionI, DocumentI {
  User validateLogin(LoginDetails loginDetails);
}
