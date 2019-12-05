package controller.implementations;

import controller.interfaces.UserController;
import data.DTO.LoginDetails;
import data.DTO.User;
import data.database.implementations.LoginDocumentImpl;
import data.database.implementations.UserDocumentImpl;
import data.database.interfaces.LoginDocumentI;
import data.database.interfaces.UserDocumentI;
import util.Hashing;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;
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
    try{
      return (User) userDocument.get(id);
    }
    catch (NullPointerException nullPointerException) {
      throw new NotFoundException("Could not find user");
    }
  }

  @Override
  public void add(User user, LoginDetails loginDetails) {
    if (!emailAlreadyExits(loginDetails.getUsername()) || !emailAlreadyExits(user.getEmail())) {
      loginDetails.setPassword(Hashing.hashPassword(loginDetails.getPassword()));
      userDocument.addUser(user, loginDetails);
    }
    else
      throw new BadRequestException("Username/email exist");
  }

  @Override
  public void delete(String id) {
    userDocument.delete(id);
    loginDocument.deleteLogin(id);
  }

  @Override
  public void updateLogin(String userId, LoginDetails updatedLoginDetails) {
    updatedLoginDetails.setPassword(Hashing.hashPassword(updatedLoginDetails.getPassword()));
    updatedLoginDetails.setUser_reference_id(userId);
    try {
      loginDocument.updateLogin(userId, updatedLoginDetails);
    }
    catch (NullPointerException e) {
      throw new NotFoundException("That id does not exist in the database");
    }
  }

  @Override
  public void updateUser(String id, User updatedUser) {
    try {
      userDocument.updateUser(id, updatedUser);
    }
    catch (NullPointerException e) {
      throw new NotFoundException("That id does not exist in the database");
    }
  }

  private boolean emailAlreadyExits(String emailToCheck) {
    for (User user : getAll()) {
      if (user.getEmail().equals(emailToCheck))
        return true;
    }
    return false;
  }
}
