package data.localstorage;

public class SpotifySingleton {
    private static SpotifySingleton storage = null;
    private String clientCredentialsFlowToken;

    public String getClientCredentialsFlowToken() {
        return clientCredentialsFlowToken;
    }

    public void setClientCredentialsFlowToken(String clientCredentialsFlowToken) {
        this.clientCredentialsFlowToken = clientCredentialsFlowToken;
    }


    private SpotifySingleton() {
    }

    public static SpotifySingleton getInstance()
    {
        if (storage == null)
            storage = new SpotifySingleton();

        return storage;
    }
}
