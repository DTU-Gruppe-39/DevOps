package controller.implementations;

import controller.ControllerRegistry;
import controller.interfaces.MusicController;
import data.DTO.MusicRequest;
import data.DTO.Track;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import java.io.IOException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Created by magnus
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class MusicControllerImplTest {
  MusicController musicController = ControllerRegistry.getMusicController();
  @Test
  @Order(1)
  public void testGetSearch() {
    assertTrue(null != getTestTracks());
    //If search results are changing then the result under this line will change
    assertTrue(getTestTracks().get(0).getSongName().equals("V For Sejr"));
  }

  @Test
  @Order(2)
  public void testAddRequest() {
    Track track = getTestTracks().get(0);
    musicController.addRequest(track);
    boolean findAddedRequest = false;
    for (MusicRequest musicRequest : musicController.getRequests()) {
      if (musicRequest.getTrack().getSongName().equals(track.getSongName()))
        findAddedRequest = true;
    }
    assertTrue(findAddedRequest);
  }

  @Test
  @Order(3)
  public void testDeleteRequest() {
    Track track = getTestTracks().get(0);
    musicController.deleteRequest(track);
    boolean findDeletedRequest = false;
    for (MusicRequest musicRequest : musicController.getRequests()) {
      if (musicRequest.getTrack().getSongName().equals(track.getSongName()));
        findDeletedRequest = true;
    }
    assertFalse(findDeletedRequest);
  }

  public List<Track> getTestTracks() {
    try {
      return musicController.getSearch("sejr");
    } catch (IOException e) {
      System.out.println(e);
    }
    return null;
  }

}