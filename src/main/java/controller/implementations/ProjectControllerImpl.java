package controller.implementations;

import controller.interfaces.ProjectController;
import data.DTO.Project;
import data.database.implementations.ProjectDocumentImpl;
import data.database.interfaces.ProjectDocumentI;

import java.util.List;

/**
 * Created by magnus
 */
public class ProjectControllerImpl implements ProjectController {
  private ProjectDocumentI projectDocument = new ProjectDocumentImpl();

  @Override
  public List<Project> getAll() {
    return projectDocument.getAll();
  }

  @Override
  public Project get(String id) {
    return (Project) projectDocument.get(id);
  }

  @Override
  public void add(Project project) {
    projectDocument.add(project);
  }

  @Override
  public void update(String id, Project updatedProject) {
    projectDocument.update(id, updatedProject);
  }

  @Override
  public void delete(String id) {
    projectDocument.delete(id);
  }
}
