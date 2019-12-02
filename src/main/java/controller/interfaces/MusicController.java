package controller.interfaces;

import data.DTO.MusicRequest;
import data.DTO.Track;
import java.io.IOException;
import java.util.List;

public interface MusicController {
    public List<Track> getSearch(String songName) throws IOException;
    public List<MusicRequest> getRequests();
    public void addRequest(Track track);
    public void deleteRequest(Track track);
}
