package util;

import data.localstorage.SpotifySingleton;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Base64;

public class SpotifyAuth {
    static SpotifySingleton storage = SpotifySingleton.getInstance();
    private static String clientId = "edfb659f01c344169e76cb55ab6d84a2";
    private static String clientSecret = System.getenv("SPOTIFYSECRET");



    public static void GetClientCredentialsFlowAuthToken()
    {
        Client client = ClientBuilder.newClient();

        WebTarget webTarget = client.target("https://accounts.spotify.com/api/token");

        Response response = webTarget.request(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.AUTHORIZATION, "Basic" + Base64.getEncoder().encodeToString((clientId + ":" + clientSecret).getBytes()))
                .accept(MediaType.APPLICATION_JSON)
                .post(Entity.entity(new Grant("client_credentials"), MediaType.APPLICATION_JSON));
       ClientCredentialsResponse clientCredentialsResponse = response.readEntity(ClientCredentialsResponse.class);
       storage.setClientCredentialsFlowToken(clientCredentialsResponse.getAccess_token());

    }


}

class Grant {
    private String grant_type;
    Grant(String grant_type) {
        this.grant_type = grant_type;
    }
}

class ClientCredentialsResponse {
    private String access_token;
    private String token_type;
    private int expires_in;
    public ClientCredentialsResponse(){
    }

    public ClientCredentialsResponse(String access_token, String token_type, int expires_in) {
        this.access_token = access_token;
        this.token_type = token_type;
        this.expires_in = expires_in;
    }

    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }
}
