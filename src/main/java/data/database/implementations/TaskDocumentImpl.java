package data.database.implementations;

import data.DTO.Task;
import data.database.interfaces.TaskDocumentI;

/**
 * Created by magnus
 */
public class TaskDocumentImpl extends DAOImpl<Task> implements TaskDocumentI {
  public TaskDocumentImpl() {
    super("task");
  }
}
