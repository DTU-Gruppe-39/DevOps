package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.UsecaseController;
import data.DTO.Usecase;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by magnus
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class UsecaseControllerImplTest {
  UsecaseController usecaseController = ControllerRegistry.getUsecaseController();
  private String projectId = "5de95d311c9d440000f81222";

  @Test
  @Order(1)
  public void testAddUsecase () {
    usecaseController.add(getTestUsecase());
    Usecase usecase = usecaseController.get(projectId,getIdFromTestUsecase());
    assertTrue(usecase.getUserStory().equals(getTestUsecase().getUserStory()) &&
            usecase.getPriority() == 1 &&
            usecase.getResponsible().equals("test@gmail.com"));
  }

  @Test
  @Order(2)
  public void testGetTestUsecase () {
    Usecase usecase = usecaseController.get(projectId,getIdFromTestUsecase());
    assertEquals(getTestUsecase().getUserStory(),usecase.getUserStory());
    assertEquals("test@gmail.com",usecase.getResponsible());
  }

  @Test
  @Order(3)
  public void testUpdateUsecase () {
    String id = getIdFromTestUsecase();
    usecaseController.update(projectId,id, getTestUpdateUsecase());
    Usecase usecase = usecaseController.get(projectId,id);
    assertTrue(usecase.getUserStory().equals(getTestUpdateUsecase().getUserStory()) &&
            usecase.getPriority() == 2 &&
            usecase.getResponsible().equals("test@gmail.com"));
  }

  @Test
  @Order(4)
  public void testGetAllUsecase () {
    assertNotNull(usecaseController.getAll(projectId));
    assertTrue(usecaseController.getAll(projectId).size() > 0);
  }

  @Test
  @Order(5)
  public void testDeleteUsecase () {
    usecaseController.delete(projectId,getIdFromTestUpdatedUsecase());
    assertTrue(getIdFromTestUpdatedUsecase() == null);
  }

  public Usecase getTestUsecase() {
    Usecase usecase = new Usecase();
    usecase.setUserStory("Userstory for test purposes");
    usecase.setResponsible("5dcd8c382fb23360ee7b3a10");
    usecase.setPriority(1);
    usecase.setProjectId(projectId);
    return usecase;
  }

  public Usecase getTestUpdateUsecase() {
    Usecase usecase = new Usecase();
    usecase.setUserStory("Userstory for test purposes - updated");
    usecase.setResponsible("5dcd8c382fb23360ee7b3a10");
    usecase.setPriority(2);
    usecase.setProjectId(projectId);
    return usecase;
  }

  public String getIdFromTestUsecase() {
    for (Usecase usecase : usecaseController.getAll(projectId)) {
      if (usecase.getUserStory().equals(getTestUsecase().getUserStory()) &&
              usecase.getPriority() == 1 &&
              usecase.getResponsible().equals("test@gmail.com"))
        return usecase.getId();
    }
    return null;
  }

  public String getIdFromTestUpdatedUsecase() {
    for (Usecase usecase :usecaseController.getAll(projectId)) {
      if (usecase.getUserStory().equals(getTestUpdateUsecase().getUserStory()) &&
              usecase.getPriority() == 2 &&
              usecase.getResponsible().equals("test@gmail.com"))
        return usecase.getId();
    }
    return null;
  }
}