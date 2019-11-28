package api;

import controller.ControllerRegistry;
import controller.interfaces.UsecaseController;
import data.DTO.Role;
import data.DTO.Usecase;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("usecase")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UsecaseService {
    private UsecaseController usecaseController = ControllerRegistry.getUsecaseController();

    @POST
    @Secured({Role.Developer, Role.ProjectManager})
    public void postUsecase(Usecase usecase) {
        usecaseController.add(usecase);
    }

    @GET
    @Secured({Role.Developer, Role.ProjectManager})
    public List<Usecase> getUsecase() {
        return  usecaseController.getAll();
    }

    @PUT
    @Secured({Role.Developer, Role.ProjectManager})
    public void putUsecase(Usecase usecase) {
        usecaseController.update(usecase.getId(), usecase);
    }

    @DELETE
    @Secured({Role.Developer, Role.ProjectManager})
    public void deleteUsecase(String id) {
        usecaseController.delete(id);
    }

}
