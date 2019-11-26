import React from "react";
import {observer} from "mobx-react";
import {musicStore} from "../stores/MusicStore";
import ListGroup from "react-bootstrap/ListGroup";
import "./Music.css";
import Toast from "react-bootstrap/Toast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

    function Music() {
        return (
            <div className="music">
                <Example />
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
        // alert(musicStore.showResult[key].songName + "\nwas requested");
        musicStore.toastName = musicStore.showResult[key].songName;
        musicStore.showToast = true;
        musicStore.showResult = [];
        musicStore.inputMusic = "";
    }

const Example = observer(()=> {
    // const show = musicStore.showToast;
    // const [show, setShow] = useState(musicStore.showToast);

    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                minHeight: '0px',
            }}
        >
            <Row>
                <Col xs={12}>
                    <Toast onClose={() => {musicStore.showToast = false}} show={musicStore.showToast} delay={3000} autohide style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}>
                    {/*<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>*/}
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                            />
                            <strong className="mr-auto">Music request</strong>
                            <small>Just now</small>
                        </Toast.Header>
                        <Toast.Body>{musicStore.toastName} was requested</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    );
})

export default observer(Music);