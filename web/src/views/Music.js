import React from "react";
import {observer} from "mobx-react";
import {musicStore} from "../stores/MusicStore";
import {requestStore} from "../stores/RequestStore";
import ListGroup from "react-bootstrap/ListGroup";
import "./Music.css";
import Toast from "react-bootstrap/Toast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import spotifylogo from "../spotify-2-logo-png-transparent.png"
import deletelogo from "../baseline_close_black_48dp.png"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

    function Music() {
        return (
            <div className="music">
                <Example />
                <div className="container">
                    <Row>
                        <Col>
                            <div className="row justify-content-center">
                                <h1>Music</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className="content" >
                        <Col>
                    <div className="music-search">
                        <div className="music-input">
                            <div className="row justify-content-start">
                                <h3 className="d-flex justify-content-center">Request music</h3>
                                    <Form className="musicinputform" onSubmit={getOnSubmit()}>
                                        <Row>
                                            <Col xs={8} style={{ paddingRight: 0}}>
                                                <Form.Control name="music"
                                                       type="text" placeholder="Search for a song"
                                                       value={musicStore.inputMusic}
                                                       onChange={(e) => {musicStore.inputMusic = e.target.value; musicStore.getSearch(musicStore.inputMusic);}} />
                                            </Col>
                                            <Col style={{ paddingLeft: 0}}>
                                                <Button type="submit">Search</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            {musicStore.showResult.length !== 0 &&
                            <ListGroup>
                                {musicStore.showResult.map((result, key) => (
                                    <ListGroup.Item action onClick={()=>itemClicked(key)} className="result-list" key={key}><h6>{result.songName}</h6><p>{result.artistName}</p></ListGroup.Item>
                                ))}
                            </ListGroup>
                            }
                        </div>
                    </div>
                        </Col>
                        <Col xs={8}>
                    <div className="row justify-content-end">
                        <div className="requestList d-flex justify-content-end">
                            <ul>
                                <h3 className="d-flex justify-content-end">Music requests</h3>
                                <Table responsive striped bordered>
                                    <thead>
                                    <tr>
                                        <th>Sang</th>
                                        <th>Kunstner</th>
                                        <th>Tidspunkt</th>
                                        <th>Upvotes</th>
                                        <th>Muligheder</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {requestStore.requestList.map((request, key) => (
                                        <tr>
                                            <td key={key}>{request.name}</td>
                                            <td key={key}>{request.artist}</td>
                                            <td key={key}>{request.timerequested}</td>
                                            <td key={key}>{request.upvotes}</td>
                                            <td key={key}>
                                                <a href={request.webplayerLink} target="_blank"><img src={spotifylogo} width="24" height="24" title="Åben i spotify" /></a>
                                                <img src={deletelogo} width="24" height="24" title="Slet fra listen" onClick={() => requestStore.requestList.splice(key, 1)} />
                                            </td>
                                        </tr>),
                                    )}
                                    </tbody>
                                </Table>
                            </ul>
                        </div>
                    </div>
                        </Col>
                    </Row>
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
        alert("Not implemented yet");
        musicStore.toastName = musicStore.showResult[key].songName;
        musicStore.showToast = true;
        musicStore.showResult = [];
        musicStore.inputMusic = "";
    }

const Example = observer(()=> {
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
                        <Toast.Header>
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