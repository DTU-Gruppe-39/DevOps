package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.UsecaseController;
import data.DTO.Usecase;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

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
            usecase.getResponsible().equals(getTestUsecase().getResponsible()));
  }

  @Test
  @Order(2)
  public void testGetTestUsecase () {
    assertEquals(getTestUsecase().getUserStory(),usecaseController.get(getIdFromTestUsecase()).getUserStory());
  }

  @Test
  @Order(3)
  public void testUpdateUsecase () {
    String id = getIdFromTestUsecase();
    usecaseController.update(id, getTestUpdateUsecase());
    Usecase usecase = usecaseController.get(id);
    assertTrue(usecase.getUserStory().equals(getTestUpdateUsecase().getUserStory()) &&
            usecase.getPriority().equals(getTestUpdateUsecase().getPriority()) &&
            usecase.getResponsible().equals(getTestUpdateUsecase().getResponsible()));
  }

  @Test
  @Order(4)
  public void testDeleteUsecase () {
    usecaseController.delete(getIdFromTestUpdatedUsecase());
    assertTrue(getIdFromTestUpdatedUsecase() == null);
  }

  public Usecase getTestUsecase() {
    Usecase usecase = new Usecase();
    usecase.setUserStory("Userstory for test purposes");
    usecase.setResponsible("Test User");
    usecase.setPriority("1");
    return usecase;
  }

  public Usecase getTestUpdateUsecase() {
    Usecase usecase = new Usecase();
    usecase.setUserStory("Userstory for test purposes - updated");
    usecase.setResponsible("Test User");
    usecase.setPriority("2");
    return usecase;
  }

  public String getIdFromTestUsecase() {
    for (Usecase usecase :usecaseController.getAll()) {
      if (usecase.getUserStory().equals(getTestUsecase().getUserStory()) &&
              usecase.getPriority().equals(getTestUsecase().getPriority()) &&
              usecase.getResponsible().equals(getTestUsecase().getResponsible()))
        return usecase.getId();
    }
    return null;
  }

  public String getIdFromTestUpdatedUsecase() {
    for (Usecase usecase :usecaseController.getAll()) {
      if (usecase.getUserStory().equals(getTestUpdateUsecase().getUserStory()) &&
              usecase.getPriority().equals(getTestUpdateUsecase().getPriority()) &&
              usecase.getResponsible().equals(getTestUpdateUsecase().getResponsible()))
        return usecase.getId();
    }
    return null;
  }
}