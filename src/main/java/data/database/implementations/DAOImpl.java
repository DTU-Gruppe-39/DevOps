package data.database.implementations;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import data.DTO.DocumentObject;
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
  private List<T> listOfObjectsToReturn = new ArrayList<>();

  private MongoDatabase getDatabase() {
    MongoClient mongoClient = MongoClients.create("mongodb+srv://"+ username +":" +password + "@devops69-1bknv.mongodb.net/admin?retryWrites=true&w=majority");
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
  public void update(DocumentObject documentObject) {
    Document document = new Document(documentObject.toMap());
    collection.updateOne(eq("_id",new ObjectId((String) document.get("_id"))),document);
  }

  @Override
  public DocumentObject get(String documentId) {
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
}
