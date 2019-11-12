package data.database;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import controller.ControllerRegistry;
import controller.interfaces.TaskController;
import data.DTO.Task;

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

        TaskController taskController = ControllerRegistry.getTaskController();
        taskController.addTask("Updating Tasks", "Rasmus er en cunt","Rasmus");
        System.out.print(taskController.get("5dca9828687f72785a5f3987"));
        Task task = new Task("Test task", "Perfekto", "Magnus");
        taskController.updateTask("5dca9828687f72785a5f3987",task);
        System.out.println(taskController.get("5dca9828687f72785a5f3987"));
    }
}