package data.database.interfaces;

import data.DTO.LoginDetails;

/**
 * Created by magnus
 */
public interface LoginDocumentI {
  LoginDetails validateLogin(String username) throws NullPointerException;
  void deleteLogin(String documentId);
}
