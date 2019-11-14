package data.DTO;

import org.bson.types.ObjectId;

import java.util.HashMap;
import java.util.Map;

public class Usecase extends DocumentObject {
    public String id;
    public String userStory;
    public String priority;
    public String responsible;

    public Usecase(){

    }

    public Usecase(String id, String userStory, String priority, String responsible){
        this.id = id;
        this.userStory = userStory;
        this.priority = priority;
        this.responsible = responsible;
    }

    public Usecase(String userStory, String priority, String responsible){
        this.id = null;
        this.userStory = userStory;
        this.priority = priority;
        this.responsible = responsible;
    }

    @Override
    public Map<String, Object> toMap() {
        Map<String, Object> mapToReturn = new HashMap<>();
        mapToReturn.put("userStory", getUserStory());
        mapToReturn.put("priority",getPriority());
        mapToReturn.put("responsible", getResponsible());
        return mapToReturn;
    }

    @Override
    public void toObject(Map<String, Object> mapOfObject) {
        this.id = ((ObjectId) mapOfObject.get("_id")).toString();
        this.userStory = (String) mapOfObject.get("userStory");
        this.priority = (String) mapOfObject.get("priority");
        this.responsible = (String) mapOfObject.get("responsible");
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserStory() {
        return userStory;
    }

    public void setUserStory(String userStory) {
        this.userStory = userStory;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getResponsible() {
        return responsible;
    }

    public void setResponsible(String responsible) {
        this.responsible = responsible;
    }

    @Override
    public String toString(){
        return getId() + "" + getUserStory() + "" + getPriority() + "" + getResponsible();
    }
}
