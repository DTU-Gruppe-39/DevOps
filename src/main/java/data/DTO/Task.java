package data.DTO;

import org.bson.types.ObjectId;

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

  public Task(String id, String name, String description, String responsible) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.responsible = responsible;
    this.status = Status.NotStarted;
  }
  public Task(String name, String description, String responsible) {
    this.id = null;
    this.name = name;
    this.description = description;
    this.responsible = responsible;
    this.status = Status.NotStarted;
  }

  public Task() {
    this.id = null;
    this.status = Status.NotStarted;
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
    mapToReturn.put("name", getName());
    mapToReturn.put("description",getDescription());
    mapToReturn.put("responsible", new ObjectId(getResponsible()));
    mapToReturn.put("status",getStatus().toString());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {
    this.id = ((ObjectId) mapOfObject.get("_id")).toString();
    this.name = (String) mapOfObject.get("name");
    this.description = (String) mapOfObject.get("description");
    this.responsible = ((ObjectId) mapOfObject.get("responsible")).toString();
    this.status = Status.valueOf((String) mapOfObject.get("status"));
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

  @Override
  public String toString() {
    return getId()+", "+getName()+", "+getDescription()+", "+getResponsible()+", "+getStatus().toString();
  }
}
