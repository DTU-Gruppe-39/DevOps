package api;

import controller.ControllerRegistry;
import controller.interfaces.MusicController;
import data.DTO.MusicRequest;
import data.DTO.Role;
import data.DTO.Track;
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
    @Secured({Role.ProjectManager, Role.Developer})
    public List<MusicRequest> getAll() {
        return musicController.getRequests();
    }

    @GET
    @Path("search/{songname}")
    @Secured({Role.ProjectManager, Role.Developer})
    public List<Track> getSearch(@PathParam("songname") String songname) {
        try {
//            System.out.println("Songname: " + songname);
            return musicController.getSearch(songname);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @POST
    @Secured({Role.ProjectManager, Role.Developer})
    public List<MusicRequest> post(Track track) {
        System.out.println(track);
        musicController.addRequest(track);
        return musicController.getRequests();
    }

    @DELETE
    @Secured({Role.ProjectManager, Role.Developer})
    public List<MusicRequest> delete(Track track) {
        musicController.deleteRequest(track);
        return musicController.getRequests();
    }
}
