package api;

import controller.ControllerRegistry;
import controller.interfaces.StakeholderController;
import data.DTO.Role;
import data.DTO.Stakeholder;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("project/{projectId}/stakeholder")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class StakeholderService {
    private StakeholderController stakeholderController = ControllerRegistry.getStakeholderController();
    @PathParam("projectId") String projectId;

    @POST
    @Secured({Role.Developer, Role.ProjectManager})
    public void postStakeholder(Stakeholder stakeholder) {
        stakeholderController.add(stakeholder);
    }

    @GET
    @Secured({Role.Developer, Role.ProjectManager})
    public List<Stakeholder> getStakeholder() {
        return stakeholderController.getAll(projectId);
    }

    @PUT
    @Secured({Role.Developer, Role.ProjectManager})
    public void putStakeholder(Stakeholder updatedStakeholder) {
        stakeholderController.update(projectId, updatedStakeholder.getId(), updatedStakeholder);
    }

    @DELETE
    @Secured({Role.Developer, Role.ProjectManager})
    public void deleteStakeholder(String id) {
        stakeholderController.delete(projectId, id);
    }
}