import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("stakeholder")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class StakeholderService {
    MongoDatabase database = new MongoConnector().getDb();
    MongoCollection<Document> stakeholderCollection = database.getCollection("stakeholder");

    @POST
    public void postStakeholder(@FormParam("name") String name,@FormParam("contact") String contact,@FormParam("email") String email, @FormParam("direct") boolean direct) {
    }

    @GET
    public Object getStakeholder() {
        return null;
    }

}