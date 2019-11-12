package api;

import controller.ControllerRegistry;
import controller.interfaces.StakeholderController;
import data.DTO.Stakeholder;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("stakeholder")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class StakeholderService {
    //MongoDatabase database = new data.database.MongoConnector().getDb();
    //MongoCollection<Document> stakeholderCollection = database.getCollection("stakeholder");
    private StakeholderController stakeholderController = ControllerRegistry.getStakeholderController();

    @POST
    public void postStakeholder(@FormParam("name") String name,@FormParam("contact") String contact,@FormParam("email") String email, @FormParam("direct") boolean direct) {
        stakeholderController.add(name, contact, email, direct);
    }

    @GET
    public Object getStakeholder() {
        return stakeholderController.getAll();
    }

}