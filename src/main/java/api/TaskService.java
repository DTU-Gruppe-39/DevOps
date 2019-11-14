package api;

import controller.ControllerRegistry;
import controller.interfaces.TaskController;
import data.DTO.Task;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("task")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskService {
    private TaskController taskController = ControllerRegistry.getTaskController();

    @POST
    public void postTask(Task task) {
        taskController.add(task);
    }

    @GET
    public List<Task> getTask() {
        return taskController.getAll();
    }

    @PUT
    public void putTask(String id, Task task) {
        taskController.update(id, task);
    }

    @DELETE
    public void deleteTask(String id) {
        taskController.delete(id);
    }

}
