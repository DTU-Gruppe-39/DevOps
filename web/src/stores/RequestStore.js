import {decorate, observable} from "mobx";

class RequestStore {
    constructor(){
        this.getRequested();
    }
    showRequestList = [];
    requestList = [{
        id: "",
        track: {
            trackId: "",
            songName: "",
            artistName: "",
            image_small_url: "",
            image_medium_url: "",
            image_large_url: "",
            webplayerLink: ""
        },
        timerequested: ""
    }];


    getRequested() {
        const localurl = "http://localhost:5005/api/music/";
        const testserverurl = "https://test-devops69.herokuapp.com/api/music/";
        const serverurl = "https://devops69.herokuapp.com/api/music/";
        console.log("Getting music requests");
        fetch(localurl)
            .then((response) => response.json()
                .then((jsonresponse) => {
                    // console.log("GETTING REQUESTS: " + jsonresponse);
                    this.showRequestList = jsonresponse;
                    this.requestList = jsonresponse;
                })
            )
    }

    postRequest(track) {
        const localurl = "http://localhost:5005/api/music/";
        const testserverurl = "https://test-devops69.herokuapp.com/api/music/";
        const serverurl = "https://devops69.herokuapp.com/api/music/";
        console.log("Posting music request");
        fetch(localurl, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(track)
        }) .then((response) => response.json()
            .then((jsonresponse) => {
                // console.log(jsonresponse);
                this.showRequestList = jsonresponse;
                this.requestList = jsonresponse;
            })
        )
    }

}


decorate(RequestStore, {
    requestList: observable,
    showRequestList: observable
});

export const requestStore = new RequestStore();