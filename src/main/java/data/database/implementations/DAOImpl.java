package data.database.implementations;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
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
  private final static String username = System.getenv("devopsusername");
  private final static String password = System.getenv("devopspassword");
  private static MongoDatabase db = new MongoConnector().getDb();
  MongoCollection<Document> collection;
  private DocumentObject objectToReturn;
  ParameterizedType superClass = (ParameterizedType) getClass().getGenericSuperclass();
  Class<T> type = (Class<T>) superClass.getActualTypeArguments()[0];
  private MongoClient mongoClient;

  private MongoDatabase getDatabase() {
    mongoClient = MongoClients.create("mongodb+srv://"+ username +":" +password + "@devops69-1bknv.mongodb.net/admin?retryWrites=true&w=majority");
    MongoDatabase database = mongoClient.getDatabase("devops");
    return database;
  }

  public DAOImpl(String collectionReference) {
    this.collection = db.getCollection(collectionReference);
    this.objectToReturn = null;
  }

  public T getInstance() throws Exception {
    return type.newInstance();
  }

  @Override
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

  @Override
  public void add(DocumentObject documentObject) {
    Document document = new Document(documentObject.toMap());
    collection.insertOne(document);
  }

  @Override
  public void update(String documentId, DocumentObject documentObject) {
    Document document = new Document(documentObject.toMap());
    collection.replaceOne(eq("_id", new ObjectId(documentId)),document);
  }

  @Override
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

  @Override
  public void delete(String documentId) {
    collection.deleteOne(eq("_id",new ObjectId(documentId)));
  }

  public User validateLogin(LoginDetails loginDetails) {
    objectToReturn = null;
    try {
      objectToReturn = new User();
    } catch (Exception e) {
      System.out.println("Could not define subclass of superclass"+e);
    }
    Document loginDocument = collection.find(and(eq("username",loginDetails.getUsername()),eq("password",loginDetails.getPassword()))).first();

    MongoCollection<Document> userCollection = db.getCollection("user");
    Document userDocument = userCollection.find(eq("_id",(ObjectId) loginDocument.get("user_reference_id"))).first();
    Map<String, Object> map = new HashMap<>();
    for (Map.Entry<String, Object> element : userDocument.entrySet()) {
      map.put(element.getKey(), element.getValue());
    }
    objectToReturn.toObject(map);
    return (User) objectToReturn;
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
}
