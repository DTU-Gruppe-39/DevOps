package controller.implementations;

import com.mongodb.MongoException;
import controller.ControllerRegistry;
import controller.interfaces.AuthenticationController;
import controller.interfaces.UserController;
import data.DTO.LoginDetails;
import data.DTO.User;
import data.database.implementations.LoginDocumentImpl;
import data.database.interfaces.LoginDocumentI;
import util.Hashing;
import util.JWTutil;

import javax.ws.rs.InternalServerErrorException;
import javax.ws.rs.NotAuthorizedException;

/**
 * Created by magnus
 */
public class AuthenticationControllerImpl implements AuthenticationController {
  private UserController userController = ControllerRegistry.getUserController();
  private LoginDocumentI loginDocument = new LoginDocumentImpl();

  @Override
  public String login(LoginDetails loginDetails) {
    User user = validateLoginDetails(loginDetails);
    if (user != null)
      return JWTutil.generateToken(user);
    else
      throw new NotAuthorizedException("Login failed, wrong username or password");
  }

  @Override
  public User validate(String token) {
    return userController.get(JWTutil.getUserId(token));
  }

  private User validateLoginDetails (LoginDetails loginDetails) {
    try {
      LoginDetails databaseLogin = loginDocument.validateLogin(loginDetails.getUsername());
      if (databaseLogin.getPassword() != null || databaseLogin.getUsername() != null) {
        if (Hashing.verifyHash(loginDetails.getPassword(), databaseLogin.getPassword()))
          return userController.get(databaseLogin.getUser_reference_id());
        else
          throw new NotAuthorizedException("Login failed, wrong username or password");
      }
      else
        throw new NotAuthorizedException("Login failed, wrong username or password");
    }
    catch (NullPointerException nullPointerException) {
      throw new NotAuthorizedException("Login failed, wrong username or password");
    }
    catch (MongoException mongoException ) {
      throw new InternalServerErrorException("Database failed");
    }
  }
}
