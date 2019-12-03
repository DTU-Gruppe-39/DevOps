package data.database.interfaces;

import data.DTO.LoginDetails;

/**
 * Created by magnus
 */
public interface LoginDocumentI {
  LoginDetails validateLogin(String username);
  void deleteLogin(String documentId);
}
