package data.database;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class MongoConnector {
    private static String username = System.getenv("devopsusername");
    private static String password = System.getenv("devopspassword");

    public MongoDatabase getDb() {
        MongoClient mongoClient = MongoClients.create("mongodb+srv://"+ username +":" +password + "@devops69-1bknv.mongodb.net/admin?retryWrites=true&w=majority");
        MongoDatabase database;
        if (System.getenv("TESTDB").equals("false")) {
            database = mongoClient.getDatabase("production");
        }
        else {
            database = mongoClient.getDatabase("test");
        }
        return database;
    }

    //testing
    public static void main(String[] args) {
        MongoDatabase test = new MongoConnector().getDb();
        System.out.println("Connected to " + test.getName());

        /*StakeholderController stakeholderController = new StakeholderControllerImpl();
        for (Stakeholder stakeholder : stakeholderController.getAll()) {
            System.out.println(stakeholder.getName());
        }

        TaskController taskController = ControllerRegistry.getTaskController();
        for (Task task : taskController.getAll()) {
            System.out.println(task.toString());
        }*/

        /*Stakeholder stakeholder = new Stakeholder();
        stakeholder.setContact_person("Magnus");
        stakeholder.setName("testUpdate");
        StakeholderDocumentI stakeholderDocumentI = new StakeholderDocumentImpl();
        stakeholderDocumentI.update("5dca9eb5b4bdd00313730f67",stakeholder);*/
        //System.out.println(stakeholderDocumentI.get("5dca9ed3b4bdd00313730f68").toMap().get("name"));
    }
}