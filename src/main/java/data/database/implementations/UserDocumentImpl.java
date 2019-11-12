package data.database.implementations;

import data.DTO.User;
import data.database.interfaces.UserDocumentI;

/**
 * Created by magnus
 */
public class UserDocumentImpl extends DAOImpl<User> implements UserDocumentI{
  public UserDocumentImpl() {
    super("users");
  }
}
