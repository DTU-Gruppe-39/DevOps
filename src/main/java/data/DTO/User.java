package data.DTO;

import org.bson.types.ObjectId;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by magnus
 */
public class User extends DocumentObject {
  private String id;
  private String email;
  private Role role;
  private String login_reference_id;

  public User(String id, String email, String password, Role role, String login_reference_id) {
    this.id = id;
    this.email = email;
    this.role = role;
    this.login_reference_id = login_reference_id;
  }

  public User() {
  }

  @Override
  public Map<String, Object> toMap() {
    Map<String, Object> mapToReturn = new HashMap<>();
    mapToReturn.put("email",getEmail());
    mapToReturn.put("role",getRole().toString());
    mapToReturn.put("login_reference_id", getLogin_reference_id());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {
    this.id = ((ObjectId) mapOfObject.get("_id")).toString();
    this.email = (String) mapOfObject.get("email");
    this.role = Role.valueOf((String) mapOfObject.get("role"));
    this.login_reference_id = (String) mapOfObject.get("login_reference_id");
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public String getLogin_reference_id() {
    return login_reference_id;
  }

  public void setLogin_reference_id(String login_reference_id) {
    this.login_reference_id = login_reference_id;
  }
}
