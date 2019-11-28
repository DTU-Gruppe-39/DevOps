package data.DTO;
import org.bson.types.ObjectId;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

public class MusicRequest extends DocumentObject {
    private String id;
    private Track track;
    private String timerequested;


    public MusicRequest(String id, Track track) {
        this.id = id;
        this.track = track;

        LocalTime myObj = LocalTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("HH:mm:ss");
        String formattedTime = myObj.format(myFormatObj);
        this.timerequested = formattedTime;
    }

    public MusicRequest(Track track) {
        this.track = track;
        this.id = "";

        LocalTime myObj = LocalTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("HH:mm:ss");
        String formattedTime = myObj.format(myFormatObj);
        this.timerequested = formattedTime;
    }

    public MusicRequest() {

    }

    @Override
    public Map<String, Object> toMap() {
        Map<String, Object> mapToReturn = new HashMap<>();
        mapToReturn.put("track",getTrack().toMap());
        mapToReturn.put("timerequested",getTimerequested());
        return mapToReturn;
    }

    @Override
    public void toObject(Map<String, Object> mapOfObject) {
        this.id = ((ObjectId) mapOfObject.get("_id")).toString();
//        Map<String, Object> mapOfTrack = (HashMap) mapOfObject.get("track");
//        this.track = track.toObject();
        Track trackObject = (Track) mapOfObject.get("track");
        this.track = new Track(trackObject.getTrackId(),
                trackObject.getSongName(),
                trackObject.getArtistName(),
                trackObject.getImage_small_url(),
                trackObject.getImage_medium_url(),
                trackObject.getImage_large_url(),
                trackObject.getWebplayerLink());
        this.timerequested = (String) mapOfObject.get("timerequested");
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Track getTrack() {
        return track;
    }

    public void setTrack(Track track) {
        this.track = track;
    }

    public String getTimerequested() {
        return timerequested;
    }

    public void setTimerequested(String timerequested) {
        this.timerequested = timerequested;
    }
}
