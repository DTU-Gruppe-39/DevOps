package controller.interfaces;

import data.DTO.Track;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public interface MusicController {
    public List<Track> getSearch(String songName) throws IOException;
}
