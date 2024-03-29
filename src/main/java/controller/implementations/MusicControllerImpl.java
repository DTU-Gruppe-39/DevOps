package controller.implementations;

import com.fasterxml.jackson.databind.ObjectMapper;
import controller.interfaces.MusicController;
import data.DTO.MusicRequest;
import data.DTO.Track;
import data.localstorage.SpotifySingleton;
import org.json.JSONArray;
import org.json.JSONObject;
import util.SpotifyAuth;
import javax.ws.rs.ClientErrorException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

public class MusicControllerImpl implements MusicController {
    SpotifySingleton storage = SpotifySingleton.getInstance();
    ArrayList<MusicRequest> requests = new ArrayList<>();

    public List<MusicRequest> getRequests() {
        return requests;
    }

    public void addRequest(Track track) {
        boolean contains = false;
        for (MusicRequest request : requests) {
            if (track.getTrackId().equals(request.getTrack().getTrackId())) {
                contains = true;
                break;
            }
        }

        if (!contains) {
            requests.add(new MusicRequest(track));
        }
    }

    public void deleteRequest(Track track) {
        for (int i = 0; i < requests.size(); i++) {
            if (track.getTrackId().equals(requests.get(i).getTrack().getTrackId())) {
                requests.remove(i);
                break;
            }
        }
    }


    public List<Track> getSearch(String songName) throws IOException {
        if (storage.getClientCredentialsFlowToken() == null)
        {
            SpotifyAuth.GetClientCredentialsFlowAuthToken();
        }

        Client client = ClientBuilder.newClient();
        String limit = "10"; //Number of songs that Spotify returns
        WebTarget webTarget = client.target("https://api.spotify.com/v1/search?q=track:" + URLEncoder.encode(songName, "UTF-8") + "*&type=track&market=DK&limit=" + limit + "&offset=0");

        Response response = SendClientCredentialsRequest(webTarget);

        Object object = response.readEntity(Object.class);

//        System.out.println("Object: " + object);

        ObjectMapper mapper = new ObjectMapper();
        String jsonInString = mapper.writeValueAsString(object);
//        System.out.println("JsonString: " + jsonInString);

        JSONObject jsonObject = new JSONObject(jsonInString);
//        System.out.println("kqly1: " + kqly);
//        System.out.println("kqly2: " + kqly.getJSONObject("tracks"));
//        System.out.println("kqly3: " + kqly.getJSONObject("tracks").getJSONArray("items"));

//        return kqly.getJSONObject("tracks").getJSONArray("items");

        JSONArray jsonTracks = jsonObject.getJSONObject("tracks").getJSONArray("items");

        List<Track> listOfTracks = new ArrayList<>();

        for (int i = 0; i < jsonTracks.length(); i++) {
            String trackId = jsonTracks.getJSONObject(i).get("id").toString();
            String thesongName = jsonTracks.getJSONObject(i).get("name").toString();
            String artistName = jsonTracks.getJSONObject(i).getJSONArray("artists").getJSONObject(0).get("name").toString();
            String image_small_url = jsonTracks.getJSONObject(i).getJSONObject("album").getJSONArray("images").getJSONObject(2).get("url").toString();
            String image_medium_url = jsonTracks.getJSONObject(i).getJSONObject("album").getJSONArray("images").getJSONObject(1).get("url").toString();
            String image_large_url = jsonTracks.getJSONObject(i).getJSONObject("album").getJSONArray("images").getJSONObject(0).get("url").toString();
            String webplayerLink = jsonTracks.getJSONObject(i).getJSONObject("external_urls").get("spotify").toString();
            listOfTracks.add(new Track(trackId, thesongName, artistName, image_small_url, image_medium_url, image_large_url, webplayerLink));
        }

        return listOfTracks;
    }





    private Response SendClientCredentialsRequest(WebTarget webTarget)
    {
        Response response;

        response = webTarget.request(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + storage.getClientCredentialsFlowToken())
                .accept(MediaType.APPLICATION_JSON)
                .get();

        if (response.getStatus() == 401) {
            System.out.println(response.getHeaderString("errorResponse"));
            SpotifyAuth.GetClientCredentialsFlowAuthToken();
            response = webTarget.request(MediaType.APPLICATION_JSON)
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + storage.getClientCredentialsFlowToken())
                    .accept(MediaType.APPLICATION_JSON)
                    .get();

        } else if (response.getStatus() != 200) {
            System.out.println(response.getHeaderString("errorResponse"));
            throw new ClientErrorException(response.getStatus());
        }

        return response;
    }
}
