package api;

import data.DTO.MusicRequest;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("music")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MusicService {

    @GET
    public List<MusicRequest> getAll() {
        return null;
    }

    @POST
    public void post(MusicRequest musicRequest) {

    }
}
