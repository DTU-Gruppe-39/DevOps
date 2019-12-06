package data.database.implementations;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import data.DTO.DocumentObject;
import data.DTO.LoginDetails;
import data.DTO.User;
import data.database.MongoConnector;
import data.database.interfaces.CollectionI;
import data.database.interfaces.DocumentI;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;

/**
 * Created by magnus
 */
public abstract class DAOImpl <T extends DocumentObject> implements DocumentI, CollectionI {
  private static MongoDatabase db = new MongoConnector().getDb();
  MongoCollection<Document> collection;
  private DocumentObject objectToReturn;
  ParameterizedType superClass = (ParameterizedType) getClass().getGenericSuperclass();
  Class<T> type = (Class<T>) superClass.getActualTypeArguments()[0];

  public DAOImpl(String collectionReference) {
    this.collection = db.getCollection(collectionReference);
    this.objectToReturn = null;
  }

  public T getInstance() throws Exception {
    return type.newInstance();
  }

  @Override
  public List getAll(String projectId) {
    objectToReturn = null;
    List<T> listOfObjectsToReturn = new ArrayList<>();
    for (Document document : collection.find(eq("projectId",new ObjectId(projectId)))) {
      try {
        objectToReturn = getInstance();
      } catch (Exception e) {
        System.out.println("Could not define subclass of superclass"+e);
      }
      Map<String, Object> map = new HashMap<>();
      for (Map.Entry<String, Object> element : document.entrySet()) {
        map.put(element.getKey(), element.getValue());
      }
      objectToReturn.toObject(map);
      listOfObjectsToReturn.add((T) objectToReturn);
    }
    return listOfObjectsToReturn;
  }

  @Override
  public void add(DocumentObject documentObject) {
    Document document = new Document(documentObject.toMap());
    collection.insertOne(document);
  }

  @Override
  public void update(String projectId, String documentId, DocumentObject documentObject) {
    Document document = new Document(documentObject.toMap());
    collection.replaceOne(and(eq("_id", new ObjectId(documentId)),eq("projectId", new ObjectId(projectId))),document);
  }

  @Override
  public DocumentObject get(String projectId, String documentId) {
    objectToReturn = null;
    System.out.println("projectid: "+projectId+" , Documentid: "+documentId);
    Document document = collection.find(and(eq("_id", new ObjectId(documentId)),eq("projectId",new ObjectId(projectId)))).first();
    try {
      objectToReturn = getInstance();
    } catch (Exception e) {
      System.out.println("Could not define subclass of superclass"+e);
    }
    Map<String, Object> map = new HashMap<>();
    for (Map.Entry<String, Object> element : document.entrySet()) {
      map.put(element.getKey(), element.getValue());
    }
    objectToReturn.toObject(map);
    return objectToReturn;
  }

  @Override
  public void delete(String projectId, String documentId) {
    collection.deleteOne(and(eq("_id",new ObjectId(documentId)),eq("projectId",new ObjectId(projectId))));
  }

  public LoginDetails validateLogin(String username) {
    objectToReturn = null;
    Document loginDocument = collection.find(eq("username",username)).first();
    try {
      objectToReturn = new LoginDetails();
    } catch (Exception e) {
      System.out.println("Could not define subclass of superclass"+e);
    }
    Map<String, Object> map = new HashMap<>();
    for (Map.Entry<String, Object> element : loginDocument.entrySet()) {
      map.put(element.getKey(), element.getValue());
    }
    objectToReturn.toObject(map);
    return (LoginDetails) objectToReturn;
  }

  public void addUser (User user, LoginDetails loginDetails) {
    //Inserting user details
    Document userDocument = new Document(user.toMap());
    collection.insertOne(userDocument);

    //Getting id for created user
    ObjectId userId = (ObjectId) collection.find(eq("email", user.getEmail())).first().get("_id");

    //Creating login for user
    MongoCollection<Document> loginCollection = db.getCollection("login");
    loginDetails.setUser_reference_id(userId.toString());
    Document loginDocument = new Document(loginDetails.toMap());
    loginCollection.insertOne(loginDocument);
  }

  public void deleteLogin(String userid) {
    collection.deleteOne(eq("user_reference_id", new ObjectId(userid)));
  }

  public void updateLogin(String userId, LoginDetails updatedLoginDetails) {
    Document document = new Document(updatedLoginDetails.toMap());
    MongoCollection<Document> loginCollection = db.getCollection("login");
    loginCollection.replaceOne(eq("user_reference_id", new ObjectId(userId)),document);
  }

  public void updateUser (String id, User updatedUser) {
    Document document = new Document(updatedUser.toMap());
    collection.replaceOne(eq("_id", new ObjectId(id)),document);
  }

  public List getAll() {
    objectToReturn = null;
    List<T> listOfObjectsToReturn = new ArrayList<>();
    for (Document document : collection.find()) {
      try {
        objectToReturn = getInstance();
      } catch (Exception e) {
        System.out.println("Could not define subclass of superclass"+e);
      }
      Map<String, Object> map = new HashMap<>();
      for (Map.Entry<String, Object> element : document.entrySet()) {
        map.put(element.getKey(), element.getValue());
      }
      objectToReturn.toObject(map);
      listOfObjectsToReturn.add((T) objectToReturn);
    }
    return listOfObjectsToReturn;
  }

  public void delete(String documentId) {
    collection.deleteOne(eq("_id",new ObjectId(documentId)));
  }

  public DocumentObject get(String documentId) {
    objectToReturn = null;
    Document document = collection.find(eq("_id", new ObjectId(documentId))).first();
    try {
      objectToReturn = getInstance();
    } catch (Exception e) {
      System.out.println("Could not define subclass of superclass"+e);
    }
    Map<String, Object> map = new HashMap<>();
    for (Map.Entry<String, Object> element : document.entrySet()) {
      map.put(element.getKey(), element.getValue());
    }
    objectToReturn.toObject(map);
    return objectToReturn;
  }

  public void update(String documentId, DocumentObject documentObject) {
    Document document = new Document(documentObject.toMap());
    collection.replaceOne(eq("_id", new ObjectId(documentId)),document);
  }

}
