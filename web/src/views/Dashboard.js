import React from "react";
import {observer} from "mobx-react";
import {ProgressBar} from "react-bootstrap";
import {progressStore} from "../stores/ProgressStore";
import {visionStore} from "../stores/VisionStore";

    function Dashboard() {
        return(
            <div className="dashboard-progress">
                <ProgressBar now={progressStore.progress} label={`${progressStore.progress}%`} />
                <div className="progress-input">
                    <form className="progressinputform" onSubmit={getOnSubmit()}>
                        <label>
                                <input name="progress"
                                          type="number" placeholder="Update progress"
                                          onFocus={() => (progressStore.progress !== 0) ? progressStore.inputProgress = progressStore.progress : null}
                                          value={progressStore.inputProgress}
                                          onChange={(e) => progressStore.inputProgress = e.target.value} required/>
                        </label>
                        <input type="submit" value="Save"/>
                    </form>

                </div>
            </div>
        );
    }

    function getOnSubmit() {
        return (e) => {
            e.preventDefault();
            progressStore.progress = progressStore.inputProgress;
            progressStore.inputProgress = "";

        }
    }

export default observer(Dashboard);