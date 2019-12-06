package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.UserController;
import data.DTO.LoginDetails;
import data.DTO.NewUser;
import data.DTO.User;
import data.database.implementations.LoginDocumentImpl;
import data.database.interfaces.LoginDocumentI;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import util.Hashing;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by magnus
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class UserControllerTest {
  UserController userController = ControllerRegistry.getUserController();
  LoginDocumentI loginDocumentI = new LoginDocumentImpl();

  @Test
  @Order(1)
  public void testGetTestUser (){
    assertEquals(getTestUser().getEmail(),userController.get("5dcd8c382fb23360ee7b3a10").getEmail());
    assertNotNull(userController.get(getTestUser().getId()).getProjectManagerProjects());
    assertEquals(getTestUser().getProjectManagerProjects().get(0), userController.get(getTestUser().getId()).getProjectManagerProjects().get(0));
  }

  @Test
  @Order(2)
  public void testAddUser () {
    NewUser newUser = new NewUser();
    newUser.setUser(getTestUser2());
    newUser.setLoginDetails(getTestLoginDetails());
    userController.add(newUser.getUser(),newUser.getLoginDetails());
    User user = userController.get(getIdFromTestUser2());
    assertTrue(user.getEmail().equals(getTestUser2().getEmail()));
  }

  @Test
  @Order(3)
  public void testGetTestUser2 () {
    assertEquals(getTestUser2().getEmail(),userController.get(getIdFromTestUser2()).getEmail());
    assertNotNull(userController.get(getIdFromTestUser2()).getProjectManagerProjects());
    assertEquals(getTestUser2().getProjectManagerProjects().get(0),userController.get(getIdFromTestUser2()).getProjectManagerProjects().get(0));
  }

  @Test
  @Order(4)
  public void testUpdateUser () {
    String id = getIdFromTestUser2();
    userController.updateUser(id,getTestUser2());
    User user = userController.get(id);
    assertTrue(user.getEmail().equals(getTestUser2().getEmail()));
  }

  @Test
  @Order(5)
  public void testUpdateLogin () {
    String userid = getIdFromTestUser2();
    LoginDetails loginDetailsUpdating = getTestLoginDetails2();
    userController.updateLogin(userid, loginDetailsUpdating);
    LoginDetails loginDetails = loginDocumentI.validateLogin(getTestLoginDetails2().getUsername());
    assertEquals(getTestLoginDetails2().getUsername(), loginDetails.getUsername());
    assertTrue(Hashing.verifyHash(getTestLoginDetails2().getPassword(), loginDetails.getPassword()));
    assertEquals(getTestLoginDetails2().getUser_reference_id(), loginDetails.getUser_reference_id());
  }

  @Test
  @Order(6)
  public void testGetAllUsers () {
    assertNotNull(userController.getAll());
    //Default test user + test user should be in database
    assertTrue(userController.getAll().size() > 1);
  }

  @Test
  @Order(7)
  public void testDeleteUser () {
    userController.delete(getIdFromTestUser2());
    assertTrue(getIdFromTestUser2() == null);
  }

  public User getTestUser() {
    User user = new User();
    user.setId("5dcd8c382fb23360ee7b3a10");
    user.setEmail("test@gmail.com");
    List<String> projectManagerProjects = new ArrayList<>();
    projectManagerProjects.add("5de95d311c9d440000f81222");
    user.setProjectManagerProjects(projectManagerProjects);
    return user;
  }

  public User getTestUser2() {
    User user = new User();
    user.setEmail("test2@gmail.com");
    List<String> projectManagerProjects = new ArrayList<>();
    projectManagerProjects.add("test");
    user.setProjectManagerProjects(projectManagerProjects);
    return user;
  }

  public LoginDetails getTestLoginDetails() {
    LoginDetails loginDetails = new LoginDetails();
    loginDetails.setUsername("test2@gmail.com");
    loginDetails.setPassword("123");
    return loginDetails;
  }

  public LoginDetails getTestLoginDetails2() {
    LoginDetails loginDetails = new LoginDetails();
    loginDetails.setUsername("test2@gmail.com");
    loginDetails.setPassword("12345");
    loginDetails.setUser_reference_id(getIdFromTestUser2());
    return loginDetails;
  }

  public String getIdFromTestUser2() {
    for (User user :userController.getAll()) {
      if (user.getEmail().equals(getTestUser2().getEmail()))
        return user.getId();
    }
    return null;
  }
}