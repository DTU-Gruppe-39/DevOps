package data.DTO;

import org.bson.types.ObjectId;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by magnus
 */
public class User extends DocumentObject {
  private String id;
  private String email;
  private List<String> projectManagerProjects;

  public User(String id, String email, List<String> projectManagerProjects) {
    this.id = id;
    this.email = email;
    this.projectManagerProjects = projectManagerProjects;
  }

  public User() {
  }

  @Override
  public Map<String, Object> toMap() {
    Map<String, Object> mapToReturn = new HashMap<>();
    mapToReturn.put("email",getEmail());
    mapToReturn.put("projectManagerProjects", getProjectManagerProjects());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {
    this.id = ((ObjectId) mapOfObject.get("_id")).toString();
    this.email = (String) mapOfObject.get("email");
    this.projectManagerProjects = (List<String>) mapOfObject.get("projectManagerProjects");
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

  public List<String> getProjectManagerProjects() {
    return projectManagerProjects;
  }

  public void setProjectManagerProjects(List<String> projectManagerProjects) {
    this.projectManagerProjects = projectManagerProjects;
  }
}
