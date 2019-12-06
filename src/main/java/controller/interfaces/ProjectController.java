package controller.interfaces;

import data.DTO.Project;

import java.util.List;

/**
 * Created by magnus
 */
public interface ProjectController {
  List<Project> getAll();
  Project get(String id);
  void add(Project element);
  void update(String id, Project replaceElement);
  void delete(String id);
}
