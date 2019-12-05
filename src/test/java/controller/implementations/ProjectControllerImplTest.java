package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.ProjectController;
import data.DTO.Project;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by magnus
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class ProjectControllerImplTest {
  ProjectController projectController = ControllerRegistry.getProjectController();

  @Test
  @Order(1)
  public void testGetDefaultTestProject() {
    Project project = projectController.get(getIdFromDefaultTestProject());
    assertNotNull(project);
    assertTrue(project.getName().equals(getDefaultTestProject().getName()) &&
            project.getProgress() == getDefaultTestProject().getProgress() &&
            project.getVision().equals(getDefaultTestProject().getVision()));
  }

  @Test
  @Order(2)
  public void testAddTestProject() {
    projectController.add(getTestProject());
    Project project = projectController.get(getIdFromTestProject());
    assertTrue(project.getName().equals(getTestProject().getName()) &&
            project.getProgress() == getTestProject().getProgress() &&
            project.getVision().equals(getTestProject().getVision()));
  }

  @Test
  @Order(3)
  public void testGetTestProject() {
    Project project = projectController.get(getIdFromTestProject());
    assertEquals(getTestProject().getName(), project.getName());
    assertEquals(getTestProject().getVision(), project.getVision());
  }

  @Test
  @Order(4)
  public void testUpdateProject() {
    String id = getIdFromTestProject();
    projectController.update(id, getUpdatedTestProject());
    Project project = projectController.get(getIdFromUpdatedTestProject());
    assertTrue(project.getName().equals(getUpdatedTestProject().getName()) &&
            project.getProgress() == getUpdatedTestProject().getProgress() &&
            project.getVision().equals(getUpdatedTestProject().getVision()));
  }

  @Test
  @Order(5)
  public void testGetAllProjects () {
    assertNotNull(projectController.getAll());
    //Default test project + test project should be in database
    assertTrue(projectController.getAll().size() > 1);
  }

  @Test
  @Order(6)
  public void testDeleteProject () {
    projectController.delete(getIdFromUpdatedTestProject());
    assertNull(getIdFromTestProject());
  }


  public Project getDefaultTestProject () {
    Project project = new Project();
    project.setName("Test Project");
    project.setProgress(0);
    project.setVision("Det her er visionen for test projektet. Visionen er at teste alt.");
    return project;
  }

  public Project getTestProject () {
    Project project = new Project();
    project.setName("Test Project 2");
    project.setProgress(20);
    project.setVision("Det her er visionen for test project 2. Dette er i forhold til andre teste.");
    return project;
  }

  public Project getUpdatedTestProject () {
    Project project = new Project();
    project.setName("Test Project 2 - updated");
    project.setProgress(60);
    project.setVision("Det her er visionen for test project 2. Dette er i forhold til andre teste. Updated");
    return project;
  }

  public String getIdFromDefaultTestProject () {
    for (Project project : projectController.getAll()) {
      if (project.getName().equals(getDefaultTestProject().getName()) &&
              project.getProgress() == getDefaultTestProject().getProgress() &&
              project.getVision().equals(getDefaultTestProject().getVision()))
        return project.getId();
    }
    return null;
  }

  public String getIdFromTestProject () {
    for (Project project : projectController.getAll()) {
      if (project.getName().equals(getTestProject().getName()) &&
              project.getProgress() == getTestProject().getProgress() &&
              project.getVision().equals(getTestProject().getVision()))
        return project.getId();
    }
    return null;
  }

  public String getIdFromUpdatedTestProject () {
    for (Project project : projectController.getAll()) {
      if (project.getName().equals(getUpdatedTestProject().getName()) &&
              project.getProgress() == getUpdatedTestProject().getProgress() &&
              project.getVision().equals(getUpdatedTestProject().getVision()))
        return project.getId();
    }
    return null;
  }
}