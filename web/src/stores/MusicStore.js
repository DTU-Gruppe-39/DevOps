import {decorate, observable} from "mobx";
import {authenticationStore} from "./AuthenticationStore";

class MusicStore {
    inputMusic = "";

    showResult = [];

    searchResult = [{
        trackId: "",
        songName: "",
        artistName: "",
        image_small_url: "",
        image_medium_url: "",
        image_large_url: "",
        webplayerLink: ""
    }];

    showToast = false;

    toastName = "";

    getSearch(songname) {
        if (songname === "") {
            this.showResult = [];
        } else {
            // const localurl = "http://localhost:5005/api/music/search/" + songname;
            const testserverurl = "https://test-devops69.herokuapp.com/api/music/search/" + songname;
            // const serverurl = "https://devops69.herokuapp.com/api/music/search/" + songname;
            console.log("Getting search results");
            fetch(testserverurl, {
                method: "GET",
                headers: {
                    'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
                }
            })
                .then(function (response) {
                    if (response.ok){
                        response.json().then(function (jsonresponse) {
                            musicStore.searchResult = jsonresponse;
                            musicStore.showResult = jsonresponse;
                        })
                    }
                    else {
                        alert("Status code: " + response.status + "\n " + response.statusText);
                    }
                })
        }
    }
}


decorate(MusicStore, {
    inputMusic: observable,
    searchResult: observable,
    showResult: observable,
    showToast: observable,
    toastName: observable
});

export const musicStore = new MusicStore();