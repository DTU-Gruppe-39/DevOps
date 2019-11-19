package data.DTO;

public class Track {
    private String id;
    private String songName;
    private String artistName;
    private String image_small_url;
    private String image_medium_url;
    private String image_large_url;
    private String webplayerLink;

    public Track(String id, String songName, String artistName, String image_small_url, String image_medium_url, String image_large_url, String webplayerLink) {
        this.id = id;
        this.songName = songName;
        this.artistName = artistName;
        this.image_small_url = image_small_url;
        this.image_medium_url = image_medium_url;
        this.image_large_url = image_large_url;
        this.webplayerLink = webplayerLink;
    }





    public String getId() {
        return id;
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
