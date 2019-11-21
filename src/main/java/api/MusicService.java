package api;

import controller.ControllerRegistry;
import controller.interfaces.MusicController;
import data.DTO.MusicRequest;
import org.json.JSONObject;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.List;

@Path("music")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MusicService {
    MusicController musicController = ControllerRegistry.getMusicController();

    @GET
    public List<MusicRequest> getAll() {
        return null;
    }

    @GET
    @Path("search/{songname}")
    public Object getSearch(@PathParam("songname") String songname) {
        try {
//            System.out.println("Songname: " + songname);
            return musicController.getSearch(songname);
        } catch (IOException e) {
            e.printStackTrace();
            JSONObject jsonObject = new JSONObject(e.getMessage());
            return jsonObject;
        }
    }

    @POST
    public void post(MusicRequest musicRequest) {

    }
}
