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

  @Test
  @Order(1)
  public void testAddUsecase () {
    usecaseController.add(getTestUsecase());
    Usecase usecase = usecaseController.get(getIdFromTestUsecase());
    assertTrue(usecase.getUserStory().equals(getTestUsecase().getUserStory()) &&
            usecase.getPriority().equals(getTestUsecase().getPriority()) &&
            usecase.getResponsible().equals("test@gmail.com"));
  }

  @Test
  @Order(2)
  public void testGetTestUsecase () {
    Usecase usecase = usecaseController.get(getIdFromTestUsecase());
    assertEquals(getTestUsecase().getUserStory(),usecase.getUserStory());
    assertEquals("test@gmail.com",usecase.getResponsible());
  }

  @Test
  @Order(3)
  public void testUpdateUsecase () {
    String id = getIdFromTestUsecase();
    usecaseController.update(id, getTestUpdateUsecase());
    Usecase usecase = usecaseController.get(id);
    assertTrue(usecase.getUserStory().equals(getTestUpdateUsecase().getUserStory()) &&
            usecase.getPriority().equals(getTestUpdateUsecase().getPriority()) &&
            usecase.getResponsible().equals("test@gmail.com"));
  }

  @Test
  @Order(4)
  public void testGetAllUsecase () {
    assertNotNull(usecaseController.getAll());
    assertTrue(usecaseController.getAll().size() > 0);
  }

  @Test
  @Order(5)
  public void testDeleteUsecase () {
    usecaseController.delete(getIdFromTestUpdatedUsecase());
    assertTrue(getIdFromTestUpdatedUsecase() == null);
  }

  public Usecase getTestUsecase() {
    Usecase usecase = new Usecase();
    usecase.setUserStory("Userstory for test purposes");
    usecase.setResponsible("5dcd8c382fb23360ee7b3a10");
    usecase.setPriority("1");
    return usecase;
  }

  public Usecase getTestUpdateUsecase() {
    Usecase usecase = new Usecase();
    usecase.setUserStory("Userstory for test purposes - updated");
    usecase.setResponsible("5dcd8c382fb23360ee7b3a10");
    usecase.setPriority("2");
    return usecase;
  }

  public String getIdFromTestUsecase() {
    for (Usecase usecase :usecaseController.getAll()) {
      if (usecase.getUserStory().equals(getTestUsecase().getUserStory()) &&
              usecase.getPriority().equals(getTestUsecase().getPriority()) &&
              usecase.getResponsible().equals("test@gmail.com"))
        return usecase.getId();
    }
    return null;
  }

  public String getIdFromTestUpdatedUsecase() {
    for (Usecase usecase :usecaseController.getAll()) {
      if (usecase.getUserStory().equals(getTestUpdateUsecase().getUserStory()) &&
              usecase.getPriority().equals(getTestUpdateUsecase().getPriority()) &&
              usecase.getResponsible().equals("test@gmail.com"))
        return usecase.getId();
    }
    return null;
  }
}