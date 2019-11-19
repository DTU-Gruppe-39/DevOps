package data.DTO;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class MusicRequest {
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




}
