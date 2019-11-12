package api;

import controller.ControllerRegistry;
import controller.interfaces.TaskController;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("task")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskService {
    private TaskController taskController = ControllerRegistry.getTaskController();

    @POST
    public void postTask(@FormParam("Name") String name, @FormParam("Description") String description, @FormParam("Responsible") String responsible) {
        taskController.addTask(name, description, responsible);
    }

    @GET
    public Object getTask() {
        return taskController.getAll();
    }

}
