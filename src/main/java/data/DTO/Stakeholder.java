package data.DTO;

import org.bson.types.ObjectId;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by magnus
 */
public class Stakeholder extends DocumentObject {
  private String id;
  private String name;
  private String contact_person;
  private String email;
  private Boolean stakeholder_type;

  public Stakeholder(String id, String name, String contact_person, String email, Boolean stakeholder_type) {
    this.id = id;
    this.name = name;
    this.contact_person = contact_person;
    this.email = email;
    this.stakeholder_type = stakeholder_type;
  }

  public Stakeholder() {
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getContact_person() {
    return contact_person;
  }

  public void setContact_person(String contact_person) {
    this.contact_person = contact_person;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Boolean getStakeholder_type() {
    return stakeholder_type;
  }

  public void setStakeholder_type(Boolean stakeholder_type) {
    this.stakeholder_type = stakeholder_type;
  }

  @Override
  public Map<String, Object> toMap() {
    Map<String, Object> mapToReturn = new HashMap<>();
    mapToReturn.put("name", getName());
    mapToReturn.put("contact_person", getContact_person());
    mapToReturn.put("email", getEmail());
    mapToReturn.put("stakeholder_type", getStakeholder_type());
    return mapToReturn;
  }

  @Override
  public void toObject(Map<String, Object> mapOfObject) {
    this.id = ((ObjectId) mapOfObject.get("_id")).toString();
    this.name = (String) mapOfObject.get("name");
    this.contact_person = (String) mapOfObject.get("contact_person");
    this.email = (String) mapOfObject.get("email");
    this.stakeholder_type = (Boolean) mapOfObject.get("stakeholder_type");
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }
}
