import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class MongoConnector {
    private String username = System.getenv("magnus");
    private String password = System.getenv("kqly123");
    private String dbName = "test";

    public MongoDatabase getDb() {
        MongoClient mongoClient = MongoClients.create("mongodb+srv://"+ username +":" +password + "@devops69-1bknv.mongodb.net/admin?retryWrites=true&w=majority");
        return mongoClient.getDatabase(dbName);
    }

    public static void main(String[] args) {
        MongoDatabase test = new MongoConnector().getDb();
        System.out.println("Connected to " + test.getName());
    }
}