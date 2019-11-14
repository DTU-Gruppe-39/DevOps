package data.DTO;

import org.bson.types.ObjectId;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by magnus
 */
public class LoginDetails extends DocumentObject {
  private String id;
  private String username;
  private String password;

  public LoginDetails(String id, String username, String password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  public LoginDetails(){
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Override
  public Map<String, Object> toMap() {
    Map<String, Object> mapToReturn = new HashMap<>();
    mapToReturn.put("username",getUsername());
    mapToReturn.put("password",getPassword());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {
    this.id = ((ObjectId) mapOfObject.get("_id")).toString();
    this.username = ((String) mapOfObject.get("username"));
    this.password = ((String) mapOfObject.get("password"));
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }
}
