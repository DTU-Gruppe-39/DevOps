import React from "react";
import {observer} from "mobx-react";
import {musicStore} from "../stores/MusicStore";
import ListGroup from "react-bootstrap/ListGroup";
import "./Music.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

    function Music() {
        return (
            <div className="music">
                <div className="container">
                    <div className="row justify-content-center">
                        <h1>Music</h1>
                    </div>

                    <div className="music-input">
                        <div className="row justify-content-center">
                                <form className="musicinputform" onSubmit={getOnSubmit()}>
                                    <label>
                                        <div className="col-6">
                                            <input name="music"
                                                   type="text" placeholder="Search for a song"
                                                   value={musicStore.inputMusic}
                                                   onChange={(e) => {musicStore.inputMusic = e.target.value; musicStore.getSearch(musicStore.inputMusic);}} />
                                        </div>
                                    </label>
                                    <input type="submit" value="Search"/>
                                </form>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {musicStore.showResult.length !== 0 &&
                        <ListGroup>
                            {musicStore.showResult.map((result, key) => (
                                <ListGroup.Item action onClick={()=>itemClicked(key)} className="result-list" key={key}><h5>{result.songName}</h5><p>{result.artistName}</p></ListGroup.Item>
                            ))}
                        </ListGroup>
                        }
                    </div>
                </div>
            </div>
        );
    }


    function getOnSubmit() {
        return (e) => {
            e.preventDefault();
            musicStore.getSearch(musicStore.inputMusic);
            musicStore.inputMusic = "";

        }
    }

    function itemClicked(key) {
        alert(musicStore.showResult[key].songName + "\nwas requested");
        musicStore.showResult = [];
        musicStore.inputMusic = "";
    }

export default observer(Music);