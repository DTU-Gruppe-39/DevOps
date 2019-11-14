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

  public User(String id, String email, String password, Role role, String login_reference_id) {
    this.id = id;
    this.email = email;
    this.role = role;
  }

  public User() {
  }

  @Override
  public Map<String, Object> toMap() {
    Map<String, Object> mapToReturn = new HashMap<>();
    mapToReturn.put("email",getEmail());
    mapToReturn.put("role",getRole().toString());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {
    this.id = ((ObjectId) mapOfObject.get("_id")).toString();
    this.email = (String) mapOfObject.get("email");
    this.role = Role.valueOf((String) mapOfObject.get("role"));
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
}
