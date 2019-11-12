package data.DTO;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by magnus
 */
public class User extends DocumentObject {
  private String id;
  private String email;
  private String password;
  private Role role;

  public User(String id, String email, String password, Role role) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public User() {
  }

  @Override
  public Map<String, Object> toMap() {
    Map<String, Object> mapToReturn = new HashMap<>();
    if (!(id.equals(null)))
      mapToReturn.put("_id",getId());
    mapToReturn.put("email",getEmail());
    mapToReturn.put("password",getPassword());
    mapToReturn.put("role",getRole().toString());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {
    this.id = (String) mapOfObject.get("_id");
    this.email = (String) mapOfObject.get("email");
    this.password = (String) mapOfObject.get("password");
    this.role = (Role) mapOfObject.get("role");
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

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
