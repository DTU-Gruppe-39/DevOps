package controller.implementations;

import controller.interfaces.TaskController;
import data.DTO.Task;
import data.database.implementations.TaskDocumentImpl;
import data.database.interfaces.TaskDocumentI;

import javax.ws.rs.BadRequestException;
import java.util.List;

/**
 * Created by magnus
 */
public class TaskControllerImpl implements TaskController {
  private TaskDocumentI taskDocument = new TaskDocumentImpl();

  @Override
  public List<Task> getAll() {
    return taskDocument.getAll();
  }

  @Override
  public Task get(String id) {
    return (Task) taskDocument.get(id);
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
    taskDocument.update(id, replaceTask);
  }

  @Override
  public void delete(String id) {
    taskDocument.delete(id);
  }
}
