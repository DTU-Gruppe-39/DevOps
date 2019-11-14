package data.database.implementations;

import data.DTO.LoginDetails;
import data.database.interfaces.LoginDocumentI;

/**
 * Created by magnus
 */
public class LoginDocumentImpl extends DAOImpl<LoginDetails> implements LoginDocumentI {
  public LoginDocumentImpl() {
    super("login");
  }
}
