package data.DTO;

import org.bson.types.ObjectId;

import java.util.HashMap;
import java.util.Map;

public class Track extends DocumentObject {
    private String trackId;
    private String songName;
    private String artistName;
    private String image_small_url;
    private String image_medium_url;
    private String image_large_url;
    private String webplayerLink;

    public Track(String trackId, String songName, String artistName, String image_small_url, String image_medium_url, String image_large_url, String webplayerLink) {
        this.trackId = trackId;
        this.songName = songName;
        this.artistName = artistName;
        this.image_small_url = image_small_url;
        this.image_medium_url = image_medium_url;
        this.image_large_url = image_large_url;
        this.webplayerLink = webplayerLink;
    }

    public Track() {}


    @Override
    public Map<String, Object> toMap() {
        Map<String, Object> mapToReturn = new HashMap<>();
        mapToReturn.put("trackId",getTrackId());
        mapToReturn.put("songName",getSongName());
        mapToReturn.put("artistName",getArtistName());
        mapToReturn.put("image_small_url",getImage_small_url());
        mapToReturn.put("image_medium_url",getImage_medium_url());
        mapToReturn.put("image_large_url",getImage_large_url());
        mapToReturn.put("webplayerLink",getWebplayerLink());
        return mapToReturn;
    }

    @Override
    public void toObject(Map<String, Object> mapOfObject) {
        this.trackId = ((String) mapOfObject.get("trackId"));
        this.songName = (String) mapOfObject.get("songName");
        this.artistName = (String) mapOfObject.get("artistName");
        this.image_small_url = (String) mapOfObject.get("image_small_url");
        this.image_medium_url = (String) mapOfObject.get("image_medium_url");
        this.image_large_url = (String) mapOfObject.get("image_large_url");
        this.webplayerLink = (String) mapOfObject.get("webplayerLink");
    }



    public String getTrackId() {
        return trackId;
    }

    public String getSongName() {
        return songName;
    }

    public String getArtistName() {
        return artistName;
    }

    public String getImage_small_url() {
        return image_small_url;
    }

    public String getImage_medium_url() {
        return image_medium_url;
    }

    public String getImage_large_url() {
        return image_large_url;
    }

    public String getWebplayerLink() {
        return webplayerLink;
    }
}
