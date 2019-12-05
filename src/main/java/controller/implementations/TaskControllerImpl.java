package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.TaskController;
import controller.interfaces.UserController;
import data.DTO.Task;
import data.DTO.User;
import data.database.implementations.TaskDocumentImpl;
import data.database.interfaces.TaskDocumentI;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;
import java.util.List;

/**
 * Created by magnus
 */
public class TaskControllerImpl implements TaskController {
  private TaskDocumentI taskDocument = new TaskDocumentImpl();
  private UserController userController = ControllerRegistry.getUserController();

  @Override
  public List<Task> getAll() {
    List<Task> tasks = taskDocument.getAll();
    for (Task task : tasks) {
      User user = userController.get(task.getResponsible());
      task.setResponsible(user.getEmail());
    }
    return tasks;
  }

  @Override
  public Task get(String id) {
    try {
      Task task = (Task) taskDocument.get(id);
      User user = userController.get(task.getResponsible());
      task.setResponsible(user.getEmail());
      return task;
    }
    catch (NullPointerException nullPointerException) {
      throw new NotFoundException("Could not find task");
    }
  }

  @Override
  public void add(Task task) {
    if (!(task.getName().equals("")))
      taskDocument.add(task);
    else
      throw new BadRequestException("Taskname is not declared");
  }

  @Override
  public void update(String id, Task replaceTask) {
    try {
      taskDocument.update(id, replaceTask);
    }
    catch (NullPointerException nullPointerException) {
      throw new NotFoundException("Could not find task to update");
    }
  }

  @Override
  public void delete(String id) {
    taskDocument.delete(id);
  }
}
