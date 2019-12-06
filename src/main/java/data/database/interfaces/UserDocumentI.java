package data.database.interfaces;

import data.DTO.DocumentObject;
import data.DTO.LoginDetails;
import data.DTO.User;

import java.util.List;

/**
 * Created by magnus
 */
public interface UserDocumentI {
  DocumentObject get(String documentId) throws  NullPointerException;
  void delete(String documentId);
  void addUser (User user, LoginDetails loginDetails);
  void updateUser (String id, User updatedUser) throws NullPointerException;
  List<User> getAll();
}
