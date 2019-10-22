import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Arrays;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("giraffes")
public class GiraffeService {
    List<String> giraffes = Arrays.asList("Melman", "Elmer");
    @GET
    public List<String> getGiraffes(){
        return giraffes;
    }



    @GET
    @Path("query")
    public List<Giraffe> queryGiraffes(@QueryParam("name") String name) throws NoImplementationException {
        //No implementaion yet
        throw new NoImplementationException("giraffe-queries not implemented, yet");
    }
    Her bruger vi en ny Exception:
    public class NoImplementationException extends Exception {
        public NoImplementationException(String s) {
            super(s);
        }
    }

}