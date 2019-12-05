package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.TaskController;
import data.DTO.Status;
import data.DTO.Task;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by magnus
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class TaskControllerImplTest {
  TaskController taskController = ControllerRegistry.getTaskController();

  @Test
  @Order(1)
  public void testAddTask () {
    taskController.add(getTestTask());
    Task task = taskController.get(getIdFromTestTask());
    assertTrue(task.getName().equals(getTestTask().getName()) &&
            task.getStatus().equals(getTestTask().getStatus()) &&
            task.getDescription().equals(getTestTask().getDescription()) &&
            task.getResponsible().equals("test@gmail.com"));
  }

  @Test
  @Order(2)
  public void testGetTestTask () {
    Task task = taskController.get(getIdFromTestTask());
    assertEquals(getTestTask().getName(),task.getName());
    assertEquals("test@gmail.com",task.getResponsible());
  }

  @Test
  @Order(3)
  public void testUpdateTask () {
    String id = getIdFromTestTask();
    taskController.update(id, getTestUpdatedTask());
    Task task = taskController.get(id);
    assertTrue(task.getName().equals(getTestUpdatedTask().getName()) &&
            task.getStatus().equals(getTestUpdatedTask().getStatus()) &&
            task.getDescription().equals(getTestUpdatedTask().getDescription()));
  }

  @Test
  @Order(4)
  public void testGetAllTask () {
    assertNotNull(taskController.getAll());
    assertTrue(taskController.getAll().size() > 0);
  }


  @Test
  @Order(5)
  public void testDeleteTask () {
    taskController.delete(getIdFromTestUpdatedTask());
    assertTrue(getIdFromTestUpdatedTask() == null);
  }

  public Task getTestTask() {
    Task task = new Task();
    task.setName("Test Task");
    task.setDescription("This is a test task. Will be removed soon");
    task.setResponsible("5dcd8c382fb23360ee7b3a10");
    task.setStatus(Status.NotStarted);
    return task;
  }

  public Task getTestUpdatedTask() {
    Task task = new Task();
    task.setName("Test Task - updated");
    task.setDescription("This is a test task. Will be removed soon");
    task.setResponsible("5dcd8c382fb23360ee7b3a10");
    task.setStatus(Status.InProgress);
    return task;
  }

  public String getIdFromTestTask() {
    for (Task task : taskController.getAll()) {
      if (task.getName().equals(getTestTask().getName()) &&
              task.getStatus().equals(getTestTask().getStatus()) &&
              task.getDescription().equals(getTestTask().getDescription()) &&
              task.getResponsible().equals("test@gmail.com"))
        return task.getId();
    }
    return null;
  }

  public String getIdFromTestUpdatedTask() {
    for (Task task : taskController.getAll()) {
      if (task.getName().equals(getTestUpdatedTask().getName()) &&
              task.getStatus().equals(getTestUpdatedTask().getStatus()) &&
              task.getDescription().equals(getTestUpdatedTask().getDescription()) &&
              task.getResponsible().equals("test@gmail.com"))
        return task.getId();
    }
    return null;
  }
}