package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.AuthenticationController;
import data.DTO.LoginDetails;
import data.DTO.User;
import org.junit.jupiter.api.Test;

import javax.ws.rs.NotAuthorizedException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

/**
 * Created by magnus
 */
class AuthenticationControllerTest {
  AuthenticationController authenticationController = ControllerRegistry.getAuthenticationController();
  public LoginDetails testLoginDetails () {
    LoginDetails testLoginDetails = new LoginDetails();
    testLoginDetails.setUsername("test@gmail.com");
    testLoginDetails.setPassword("123");
    return testLoginDetails;
  }

  public LoginDetails testLoginDetailsWrongUsername () {
    LoginDetails testLoginDetails = new LoginDetails();
    testLoginDetails.setUsername("gergergergergergevfrbvrbrtgrtg@gmail.com");
    testLoginDetails.setPassword("123");
    return testLoginDetails;
  }


  public LoginDetails testLoginDetailsWrongPassword () {
    LoginDetails testLoginDetails = new LoginDetails();
    testLoginDetails.setUsername("test@gmail.com");
    testLoginDetails.setPassword("1234");
    return testLoginDetails;
  }

  @Test
  public void testLoginFlow() {
    String jwt = authenticationController.login(testLoginDetails());
    User user = authenticationController.validate(jwt);
    assertEquals("test@gmail.com",user.getEmail());
    assertEquals("5dcd8c382fb23360ee7b3a10",user.getId());
  }

  @Test
  public void testLoginFlowWrongPassword() {
    assertThrows(NotAuthorizedException.class, () -> {
      authenticationController.login(testLoginDetailsWrongPassword());
    });
  }

  @Test
  public void testLoginFlowWrongUsername() {
    assertThrows(NotAuthorizedException.class, () -> {
      authenticationController.login(testLoginDetailsWrongUsername());
    });
  }

  @Test
  public void testValidatingWithModifiedJWT () {
    assertThrows(NotAuthorizedException.class, () -> {
      authenticationController.validate("eyJhbGciOiJIUzUxMiJ9" +
              ".eyJzdWIiOiJtYWdudXNrb2NoLmtvY2hAZ21haWwuY29tIiwiaWQiOiI1ZGNkNzZhZjFjOWQ0NDAwMDBiZDVhMTUiLCJyb2xlIjoiRGV2ZWxvcGVyIn0" +
              ".toJQQbjT5Y1k3vF1_cuDp9Hw1gvJ9E28RsPgmNFDA605sI-qFV5aU35Z_RIOYqpTsHta2t6KuKGY4hLPlFfQ");
    });
  }
}