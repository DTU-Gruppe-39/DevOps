package controller.interfaces;

import org.json.JSONObject;

import java.io.IOException;

public interface MusicController {
    public Object getSearch(String songName) throws IOException;
}
