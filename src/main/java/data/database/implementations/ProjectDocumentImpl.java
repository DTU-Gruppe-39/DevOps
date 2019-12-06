package data.database.implementations;

import data.DTO.Project;
import data.database.interfaces.ProjectDocumentI;

/**
 * Created by magnus
 */
public class ProjectDocumentImpl extends DAOImpl<Project> implements ProjectDocumentI {
  public ProjectDocumentImpl() {
    super("project");
  }
}
