package data.database;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import controller.ControllerRegistry;
import controller.interfaces.TaskController;
import org.bson.Document;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MongoConnector {
    private static String username = System.getenv("devopsusername");
    private static String password = System.getenv("devopspassword");

    public MongoDatabase getDb() {
        MongoClient mongoClient = MongoClients.create("mongodb+srv://"+ username +":" +password + "@devops69-1bknv.mongodb.net/admin?retryWrites=true&w=majority");
        MongoDatabase database = mongoClient.getDatabase("devops");
        return database;
    }

    //testing
    public static void main(String[] args) {
        MongoDatabase test = new MongoConnector().getDb();
        System.out.println("Connected to " + test.getName());

        //Document doc = new Document("name","Brian");
        MongoCollection<Document> brugere = test.getCollection("brugere");
        Map<String, Object> doc = new HashMap<>();
        Map<String, Object> addresser = new HashMap<>();
        addresser.put("kqly", "test1");
        addresser.put("kqly2", "test3");
        doc.put("name","Magnus");
        doc.put("adresser", addresser);
        Document document = new Document(doc);
        brugere.insertOne(document);
        List<Document> docs = new ArrayList<>();
        brugere.find().into(docs);
        System.out.println(docs);
        /*UserDocumentI userDocumentI = new UserDocumentImpl();
        User user = new User();
        user.setRole(Role.ProjectManager);
        user.setEmail("kqly");
        user.setPassword("gegre");
        userDocumentI.add(user);*/
        TaskController taskController = ControllerRegistry.getTaskController();
        taskController.addTask("Updating Tasks", "Rasmus er en cunt","Rasmus");
        System.out.println(taskController.getAll());
    }
}