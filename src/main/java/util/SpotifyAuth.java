package util;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import data.localstorage.SpotifySingleton;
import org.json.JSONObject;


import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Form;
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
                .header(HttpHeaders.AUTHORIZATION, "Basic " + Base64.getEncoder().encodeToString((clientId + ":" + clientSecret).getBytes()))
                .accept(MediaType.APPLICATION_JSON)
                .post(Entity.entity(getForm(), MediaType.APPLICATION_FORM_URLENCODED_TYPE));
        ClientCredentialsResponse clientCredentialsResponse = response.readEntity(ClientCredentialsResponse.class);
//        System.out.println(clientCredentialsResponse.getAccess_token());
//        System.out.println(clientCredentialsResponse.getToken_type());
//        System.out.println(clientCredentialsResponse.getExpires_in());
//        System.out.println(clientCredentialsResponse.getScope());
        storage.setClientCredentialsFlowToken(clientCredentialsResponse.getAccess_token());
    }



    private static Form getForm() {
        final Form form = new Form();
        form.param("grant_type", "client_credentials");
        return form;
    }

}

//class Grant {
//    private String grant_type;
//    Grant(String grant_type) {
//        this.grant_type = grant_type;
//    }
//
//    @Override
//    public String toString() {
//        return super.toString();
////        return "grant-type=" + grant_type;
//    }
//}


@JsonSerialize
class ClientCredentialsResponse {
    private String access_token;
    private String token_type;

    public String getToken_type() {
        return token_type;
    }

    public void setToken_type(String token_type) {
        this.token_type = token_type;
    }

    public int getExpires_in() {
        return expires_in;
    }

    public void setExpires_in(int expires_in) {
        this.expires_in = expires_in;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    private int expires_in;
    private String scope;
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
