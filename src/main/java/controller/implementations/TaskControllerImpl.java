package controller.implementations;

import controller.interfaces.TaskController;
import data.DTO.Task;
import data.database.implementations.TaskDocumentImpl;
import data.database.interfaces.TaskDocumentI;

import java.util.List;

/**
 * Created by magnus
 */
public class TaskControllerImpl implements TaskController {
  private TaskDocumentI taskDocument = new TaskDocumentImpl();

  @Override
  public void addTask(String name, String description, String responsible) {
    Task task = new Task(name, description, responsible);
    taskDocument.add(task);
  }

  @Override
  public List<Task> getAll() {
    return taskDocument.getAll();
  }

  @Override
  public Task get(String id) {
    return (Task) taskDocument.get(id);
  }
}
