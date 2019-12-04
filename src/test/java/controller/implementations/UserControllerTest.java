package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.UserController;
import data.DTO.LoginDetails;
import data.DTO.Role;
import data.DTO.User;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by magnus
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class UserControllerTest {
  UserController userController = ControllerRegistry.getUserController();

  @Test
  @Order(1)
  public void testGetTestUser (){
    assertEquals(getTestUser().getEmail(),userController.get("5dcd8c382fb23360ee7b3a10").getEmail());
  }

  @Test
  @Order(2)
  public void testAddUser () {
    userController.add(getTestUser2(), getTestLoginDetails());
    User user = userController.get(getIdFromTestUser2());
    assertTrue(user.getEmail().equals(getTestUser2().getEmail()) && user.getRole().equals(getTestUser2().getRole()));
  }


  @Test
  @Order(3)
  public void testGetTestUser2 () {
    assertEquals(getTestUser2().getEmail(),userController.get(getIdFromTestUser2()).getEmail());
  }

  @Test
  @Order(4)
  public void testUpdateUser () {
    //Not implemented yet
  }

  @Test
  @Order(5)
  public void testDeleteUser () {
    userController.delete(getIdFromTestUser2());
    assertTrue(getIdFromTestUser2() == null);
  }

  public User getTestUser() {
    User user = new User();
    user.setId("5dcd8c382fb23360ee7b3a10");
    user.setEmail("test@gmail.com");
    user.setRole(Role.ProjectManager);
    return user;
  }

  public User getTestUser2() {
    User user = new User();
    user.setEmail("test2@gmail.com");
    user.setRole(Role.Developer);
    return user;
  }

  public LoginDetails getTestLoginDetails() {
    LoginDetails loginDetails = new LoginDetails();
    loginDetails.setUsername("test2@gmail.com");
    loginDetails.setPassword("123");
    return loginDetails;
  }

  public String getIdFromTestUser2() {
    for (User user :userController.getAll()) {
      if (user.getEmail().equals(getTestUser2().getEmail()) && user.getRole().equals(getTestUser2().getRole()))
        return user.getId();
    }
    return null;
  }
}