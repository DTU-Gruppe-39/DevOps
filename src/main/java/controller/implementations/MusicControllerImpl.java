package controller.implementations;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.codemodel.internal.JArray;
import controller.interfaces.MusicController;
import data.DTO.Track;
import data.localstorage.SpotifySingleton;
import org.glassfish.jersey.server.Uri;
import util.SpotifyAuth;

import javax.ws.rs.ClientErrorException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

public class MusicControllerImpl implements MusicController {
    SpotifySingleton storage = SpotifySingleton.getInstance();

    public List<Track> getSearch(String songName) throws IOException {
        if (storage.getClientCredentialsFlowToken() == null)
        {
            SpotifyAuth.GetClientCredentialsFlowAuthToken();
        }

        Client client = ClientBuilder.newClient();
        String limit = "20"; //Number of songs that Spotify returns
        WebTarget webTarget = client.target("https://api.spotify.com/v1/search?q=track:" + URLEncoder.encode(songName, "UTF-8") + "*&type=track&market=DK&limit=" + limit + "&offset=0");

        Response response = SendClientCredentialsRequest(webTarget);
//        List<Track> listOfTracks = new ArrayList<>();
//        String strResponse = response.readEntity(String.class);

        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(response);

        JsonNode jsonNode = objectMapper.readTree(jsonResponse);
        String jsonArray = jsonNode.get("tracks").get("items").asText();





//        var jsonTracks = JObject.Parse(GetResponse);
//        JArray tracks = (JArray)jsonTracks["tracks"]["items"];
//        ListOfTracks listTracks = new ListOfTracks();
//        for (int i = 0; i < tracks.Count; i++)
//        {
//            var trackId = tracks[i]["id"].ToString();
//            var thesongName = tracks[i]["name"].ToString();
//            var artistName = tracks[i]["artists"][0]["name"].ToString();
//            var image_small_url = tracks[i]["album"]["images"][2]["url"].ToString();
//            var image_medium_url = tracks[i]["album"]["images"][1]["url"].ToString();
//            var image_large_url = tracks[i]["album"]["images"][0]["url"].ToString();
//            var webplayerLink = tracks[i]["external_urls"]["spotify"].ToString();
//            listTracks.Tracks.Add(new Track(trackId, thesongName, artistName, image_small_url, image_medium_url, image_large_url, webplayerLink));
//        }
//
//        return listTracks;
        return null;
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
