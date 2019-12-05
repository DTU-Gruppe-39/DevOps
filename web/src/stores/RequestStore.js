import {decorate, observable} from "mobx";
import {authenticationStore} from "./AuthenticationStore";

class RequestStore {
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
        // const localurl = "http://localhost:5005/api/music/";
        const testserverurl = "https://test-devops69.herokuapp.com/api/music/";
        // const serverurl = "https://devops69.herokuapp.com/api/music/";
        console.log("Getting music requests");
        fetch(testserverurl, {
            method: "GET",
            headers: {
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            }
        })
            .then((response) => response.json()
                .then((jsonresponse) => {
                    // console.log("GETTING REQUESTS: " + jsonresponse);
                    this.showRequestList = jsonresponse;
                    this.requestList = jsonresponse;
                })
            )
    }

    postRequest(track) {
        // const localurl = "http://localhost:5005/api/music/";
        const testserverurl = "https://test-devops69.herokuapp.com/api/music/";
        // const serverurl = "https://devops69.herokuapp.com/api/music/";
        console.log("Posting music request");
        fetch(testserverurl, {
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

    deleteRequest(track) {
        // const localurl = "http://localhost:5005/api/music/";
        const testserverurl = "https://test-devops69.herokuapp.com/api/music/";
        // const serverurl = "https://devops69.herokuapp.com/api/music/";
        console.log("Deleting music request");
        fetch(testserverurl, {
            method: "DELETE",
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