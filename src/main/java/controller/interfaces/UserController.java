package controller.interfaces;

import data.DTO.LoginDetails;
import data.DTO.User;

import java.util.List;

/**
 * Created by magnus
 */
public interface UserController {
  List<User> getAll();
  User get(String id);
  void add(User element, LoginDetails loginDetails);
  void delete(String id);
}
