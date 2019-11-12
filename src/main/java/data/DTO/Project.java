package data.DTO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by magnus
 */
public class Project extends DocumentObject {
  private String name;
  private User projectleader;
  private List<User> developers;
  private List<Stakeholder> stakeholder;
  private List<Task> tasks;

  public Project() {
  }

  public Project(String name, User projectleader, List<User> developers, List<Stakeholder> stakeholder, List<Task> tasks) {
    this.name = name;
    this.projectleader = projectleader;
    this.developers = developers;
    this.stakeholder = stakeholder;
    this.tasks = tasks;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public User getProjectleader() {
    return projectleader;
  }

  public void setProjectleader(User projectleader) {
    this.projectleader = projectleader;
  }

  public List<User> getDevelopers() {
    return developers;
  }

  public void setDevelopers(List<User> developers) {
    this.developers = developers;
  }

  public List<Stakeholder> getStakeholder() {
    return stakeholder;
  }

  public void setStakeholder(List<Stakeholder> stakeholder) {
    this.stakeholder = stakeholder;
  }

  public List<Task> getTasks() {
    return tasks;
  }

  public void setTasks(List<Task> tasks) {
    this.tasks = tasks;
  }

  @Override
  public Map<String, Object> toMap() {
    Map<String, Object> mapToReturn = new HashMap<>();
    mapToReturn.put("name",getName());
    mapToReturn.put("projectleader_id", getProjectleader().getId());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {

  }
}
