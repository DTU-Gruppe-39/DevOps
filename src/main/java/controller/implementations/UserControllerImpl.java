package controller.implementations;

import controller.interfaces.UserController;
import data.DTO.LoginDetails;
import data.DTO.User;
import data.database.implementations.LoginDocumentImpl;
import data.database.implementations.UserDocumentImpl;
import data.database.interfaces.LoginDocumentI;
import data.database.interfaces.UserDocumentI;

import java.util.List;

/**
 * Created by magnus
 */
public class UserControllerImpl implements UserController {
  private UserDocumentI userDocument = new UserDocumentImpl();
  private LoginDocumentI loginDocument = new LoginDocumentImpl();

  @Override
  public List<User> getAll() {
    return userDocument.getAll();
  }

  @Override
  public User get(String id) {
    return (User) userDocument.get(id);
  }

  @Override
  public void add(User user, LoginDetails loginDetails) {
    userDocument.addUser(user, loginDetails);
  }

  @Override
  public void delete(String id) {
    userDocument.delete(id);
    loginDocument.deleteLogin(id);
  }
}
