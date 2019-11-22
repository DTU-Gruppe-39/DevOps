import {decorate, observable} from "mobx";

class MusicStore {
    inputMusic = "";

    showResult = [];

    searchResult = [{
        id: "",
        songName: "",
        artistName: "",
        image_small_url: "",
        image_medium_url: "",
        image_large_url: "",
        webplayerLink: ""
    }];

    getSearch(songname) {
        if (songname === "") {
            this.showResult = [];
        } else {
            const localurl = "http://localhost:5005/api/music/search/" + songname;
            const testserverurl = "https://test-devops69.herokuapp.com/api/music/search/" + songname;
            const serverurl = "https://devops69.herokuapp.com/api/music/search/" + songname;
            console.log("Getting search results");
            fetch(localurl)
                .then((response) => response.json()
                    .then((jsonresponse) => {
                        // console.log(jsonresponse);
                        this.searchResult = jsonresponse;
                        this.showResult = jsonresponse;
                    })
                )
        }
    }
}


decorate(MusicStore, {
    inputMusic: observable,
    searchResult: observable,
    showResult: observable
});

export const musicStore = new MusicStore();