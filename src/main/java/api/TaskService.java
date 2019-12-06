package api;

import controller.ControllerRegistry;
import controller.interfaces.TaskController;
import data.DTO.Role;
import data.DTO.Task;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("project/{projectId}/task")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskService {
    private TaskController taskController = ControllerRegistry.getTaskController();
    @PathParam("projectId") String projectId;


    @POST
    @Secured({Role.Developer, Role.ProjectManager})
    public void postTask(Task task) {
        taskController.add(task);
    }

    @GET
    @Secured({Role.Developer, Role.ProjectManager})
    public List<Task> getTask() {
        return taskController.getAll(projectId);
    }

    @PUT
    @Secured({Role.Developer, Role.ProjectManager})
    public void putTask(Task task) {
        taskController.update(projectId, task.getId(), task);
    }

    @DELETE
    @Secured({Role.Developer, Role.ProjectManager})
    public void deleteTask(String id) {
        taskController.delete(projectId, id);
    }

}
