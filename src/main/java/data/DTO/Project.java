package data.DTO;

import org.bson.types.ObjectId;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by magnus
 */
public class Project extends DocumentObject {
  private String id;
  private String name;
  private int progress;
  private String vision;

  public Project() {
  }

  public Project(String id, String name, int progress, String vision) {
    this.id = id;
    this.name = name;
    this.progress = progress;
    this.vision = vision;
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
    mapToReturn.put("progress",getProgress());
    mapToReturn.put("vision", getVision());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {
    this.id = ((ObjectId) mapOfObject.get("_id")).toString();
    this.name = (String) mapOfObject.get("name");
    this.progress  = Integer.parseInt(String.valueOf(mapOfObject.get("progress")));
    this.vision = (String) mapOfObject.get("vision");
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public int getProgress() {
    return progress;
  }

  public void setProgress(int progress) {
    this.progress = progress;
  }

  public String getVision() {
    return vision;
  }

  public void setVision(String vision) {
    this.vision = vision;
  }
}
