import {decorate, observable} from "mobx";

class RequestStore {
    requestList = [{
        name: 'bad guy',
        artist: 'Billie Eilish',
        timerequested: '19:45',
        upvotes: 5,
        webplayerLink: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m"
    }, {
        name: 'Mad Love',
        artist: 'MOTi, Vigiland',
        timerequested: '18:55',
        upvotes: 2,
        webplayerLink: "https://open.spotify.com/track/6P7Qezj2LV5kHc2VihAJWp"
    }, {
        name: 'Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy) - Tiësto Remix',
        artist: 'Martin Garrix, Macklemore, Fall Out Boy, Tiësto',
        timerequested: '19:11',
        upvotes: 0,
        webplayerLink: "https://open.spotify.com/track/1sI9LpIHEEzQwSVnp8oyfD"
    }];
}


decorate(RequestStore, {
    requestList: observable,
});

export const requestStore = new RequestStore();