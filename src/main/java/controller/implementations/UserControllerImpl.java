package controller.implementations;

import controller.interfaces.UserController;
import data.DTO.User;
import data.database.implementations.UserDocumentImpl;
import data.database.interfaces.UserDocumentI;

import java.util.List;

/**
 * Created by magnus
 */
public class UserControllerImpl implements UserController {
  private UserDocumentI userDocument = new UserDocumentImpl();

  @Override
  public List<User> getAll() {
    return userDocument.getAll();
  }

  @Override
  public User get(String id) {
    return (User) userDocument.get(id);
  }

  @Override
  public void add(User element) {
    userDocument.add(element);
  }

  @Override
  public void update(String id, User replaceElement) {
    userDocument.update(id, replaceElement);
  }

  @Override
  public void delete(String id) {
    userDocument.delete(id);
  }
}
