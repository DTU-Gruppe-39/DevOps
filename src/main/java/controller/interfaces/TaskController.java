package controller.interfaces;

import data.DTO.Task;

import java.util.List;

/**
 * Created by magnus
 */
public interface TaskController {
  void addTask(String name, String description, String responsible);
  List<Task> getAll();
  Task get(String id);
  void updateTask(String id, Task task);
}
