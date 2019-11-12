package data.database.implementations;

import data.DTO.Project;
import data.database.interfaces.UserDocumentI;

/**
 * Created by magnus
 */
public class ProjectDocumentImpl extends DAOImpl<Project> implements UserDocumentI {
  public ProjectDocumentImpl() {
    super("project");
  }
}
