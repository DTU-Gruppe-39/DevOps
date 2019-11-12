package data.DTO;

import java.util.Map;

/**
 * Created by magnus
 */
public class Task extends DocumentObject {
  private String id;
  private String name;
  private String description;
  private User responsible;
  private Status status;

  public Task(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public Map<String, Object> toMap() {
    return null;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {

  }
}
