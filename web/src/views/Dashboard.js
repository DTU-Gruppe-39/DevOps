import React from "react";
import {observer} from "mobx-react";
import {ProgressBar} from "react-bootstrap";
import {progressStore} from "../stores/ProgressStore";
import "./Dashboard.css"
    function Dashboard() {
        return(
            <div className="dashboard-progress">
                <div className="container">
                    <div className="row justify-content-center">
                        <h1>Project progress</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <ProgressBar max={100} min={0} now={progressStore.progress} label={`${progressStore.progress}%`} style={{height: 40}} />
                        </div>
                    </div>
                    <div className="progress-input">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <form className="progressinputform" onSubmit={getOnSubmit()}>
                                    <label>
                                            <input name="progress"
                                                   type="number" placeholder="Update progress"
                                                   onFocus={() => (progressStore.progress !== 0) ? progressStore.inputProgress = progressStore.progress : null}
                                                   value={progressStore.inputProgress}
                                                   min={0}
                                                   max={100}
                                                   style={{width: 175}}
                                                   onChange={(e) => progressStore.inputProgress = e.target.value} required/>
                                    </label>
                                    <input type="submit" value="Save"/>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    function getOnSubmit() {
        return (e) => {
            e.preventDefault();
            if (progressStore.inputProgress < 0) {
                progressStore.inputProgress = 0;
            } else if (progressStore.inputProgress > 100) {
                progressStore.inputProgress = 100;
            }
            progressStore.progress = progressStore.inputProgress;
            progressStore.inputProgress = "";

        }
    }

export default observer(Dashboard);