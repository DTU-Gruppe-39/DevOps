package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.StakeholderController;
import data.DTO.Stakeholder;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by magnus
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class StakeholderControllerImplTest {
  StakeholderController stakeholderController = ControllerRegistry.getStakeholderController();
  private String projectId = "5de95d311c9d440000f81222";

  @Test
  @Order(1)
  public void testAddStakeholder () {
    stakeholderController.add(getTestStakeholder());
    Stakeholder stakeholder = stakeholderController.get(projectId,getIdFromTestStakeholder());
    assertTrue(stakeholder.getName().equals(getTestStakeholder().getName()) &&
            stakeholder.getEmail().equals(getTestStakeholder().getEmail()) &&
            stakeholder.getContact_person().equals(getTestStakeholder().getContact_person()) &&
            stakeholder.getStakeholder_type().equals(getTestStakeholder().getStakeholder_type()));
  }

  @Test
  @Order(2)
  public void testGetTestStakeholder () {
    assertEquals(getTestStakeholder().getName(),stakeholderController.get(projectId,getIdFromTestStakeholder()).getName());
  }

  @Test
  @Order(3)
  public void testUpdateStakeholder () {
    String id = getIdFromTestStakeholder();
    stakeholderController.update(projectId,id, getTestUpdatedStakeholder());
    Stakeholder stakeholder = stakeholderController.get(projectId,id);
    assertTrue(stakeholder.getName().equals(getTestUpdatedStakeholder().getName()) &&
            stakeholder.getEmail().equals(getTestUpdatedStakeholder().getEmail()) &&
            stakeholder.getContact_person().equals(getTestUpdatedStakeholder().getContact_person()) &&
            stakeholder.getStakeholder_type().equals(getTestUpdatedStakeholder().getStakeholder_type()));
  }

  @Test
  @Order(4)
  public void testGetAllStakeholders () {
    assertNotNull(stakeholderController.getAll(projectId));
    assertTrue(stakeholderController.getAll(projectId).size() > 0);
  }

  @Test
  @Order(5)
  public void testDeleteStakeholder () {
    stakeholderController.delete(projectId,getIdFromTestUpdatedStakeholder());
    assertTrue(getIdFromTestUpdatedStakeholder() == null);
  }

  public Stakeholder getTestStakeholder() {
    Stakeholder stakeholder = new Stakeholder();
    stakeholder.setName("Test stakeholder");
    stakeholder.setEmail("teststakeholder@gmail.com");
    stakeholder.setContact_person("Bo Testson");
    stakeholder.setStakeholder_type(false);
    stakeholder.setProjectId(projectId);
    return stakeholder;
  }

  public Stakeholder getTestUpdatedStakeholder() {
    Stakeholder stakeholder = new Stakeholder();
    stakeholder.setName("Test stakeholder - updated");
    stakeholder.setEmail("teststakeholderupdated@gmail.com");
    stakeholder.setContact_person("Bo Testson");
    stakeholder.setStakeholder_type(true);
    stakeholder.setProjectId(projectId);
    return stakeholder;
  }

  public String getIdFromTestStakeholder() {
    for (Stakeholder stakeholder : stakeholderController.getAll(projectId)) {
      if (stakeholder.getName().equals(getTestStakeholder().getName()) &&
              stakeholder.getEmail().equals(getTestStakeholder().getEmail()) &&
              stakeholder.getContact_person().equals(getTestStakeholder().getContact_person()) &&
              stakeholder.getStakeholder_type().equals(getTestStakeholder().getStakeholder_type()))
        return stakeholder.getId();
    }
    return null;
  }

  public String getIdFromTestUpdatedStakeholder() {
    for (Stakeholder stakeholder : stakeholderController.getAll(projectId)) {
      if (stakeholder.getName().equals(getTestUpdatedStakeholder().getName()) &&
              stakeholder.getEmail().equals(getTestUpdatedStakeholder().getEmail()) &&
              stakeholder.getContact_person().equals(getTestUpdatedStakeholder().getContact_person()) &&
              stakeholder.getStakeholder_type().equals(getTestUpdatedStakeholder().getStakeholder_type()))
        return stakeholder.getId();
    }
    return null;
  }
}