package data.DTO;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by magnus
 */
public class Task extends DocumentObject {
  private String id;
  private String name;
  private String description;
  private String responsible;
  private Status status;

  public Task(String id, String name, String description, String responsible, Status status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.responsible = responsible;
    this.status = status;
  }

  public Task() {
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public Map<String, Object> toMap() {
    Map<String, Object> mapToReturn = new HashMap<>();
    if(!(id.equals(null)))
      mapToReturn.put("_id",getId());
    mapToReturn.put("name", getName());
    mapToReturn.put("description",getDescription());
    mapToReturn.put("responsible_user_id", getResponsible());
    mapToReturn.put("status",getStatus().toString());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {
    this.id = (String) mapOfObject.get("_id");
    this.name = (String) mapOfObject.get("name");
    this.description = (String) mapOfObject.get("description");
    this.responsible = (String) mapOfObject.get("responsible_user_id");
    this.status = (Status) mapOfObject.get("status");
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getResponsible() {
    return responsible;
  }

  public void setResponsible(String responsible) {
    this.responsible = responsible;
  }

  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }
}
