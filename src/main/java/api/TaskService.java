package api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("task")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskService {

    //MongoDatabase database = new data.MongoConnector().getDb();
    //MongoCollection<Document> taskCollection = database.getCollection("task");

    @POST
    public void postTask(@FormParam("Name") String name, @FormParam("Description") String description, @FormParam("Responsible") String responsible) {
    }

    @GET
    public Object getTask() {
        return null;
    }

}
