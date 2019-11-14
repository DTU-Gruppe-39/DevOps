package api;

import controller.ControllerRegistry;
import controller.interfaces.StakeholderController;
import data.DTO.Stakeholder;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("stakeholder")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class StakeholderService {
    //MongoDatabase database = new data.database.MongoConnector().getDb();
    //MongoCollection<Document> stakeholderCollection = database.getCollection("stakeholder");
    private StakeholderController stakeholderController = ControllerRegistry.getStakeholderController();

    @POST
    public void postStakeholder(Stakeholder stakeholder) {
        stakeholderController.add(stakeholder);
    }

    @GET
    public List<Stakeholder> getStakeholder() {
        return stakeholderController.getAll();
    }

    @PUT
    public void putStakeholder(Stakeholder updatedStakeholder) {
        stakeholderController.update("fgeg", updatedStakeholder);
    }

    @DELETE
    public void deleteStakeholder(String id) {
        stakeholderController.delete(id);
    }
}