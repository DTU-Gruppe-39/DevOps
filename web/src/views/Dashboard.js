import React from "react";
import {observer} from "mobx-react";
import {ProgressBar} from "react-bootstrap";
import "./Dashboard.css"
import {projectStore} from "../stores/ProjectStore";
    function Dashboard() {
        return(
            <div className="dashboard-progress">
                <div class="container">
                    <div className="row justify-content-center">
                        <h1>Project progress</h1>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-10">
                            <ProgressBar max={100} min={0} now={projectStore.currentProject.progress} label={`${projectStore.currentProject.progress}%`} style={{height: 40}} />
                        </div>
                    </div>
                    <div className="progress-input">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <form className="progressinputform" onSubmit={getOnSubmit()}>
                                    <label>
                                            <input name="progress"
                                                   type="number" placeholder="Update progress"
                                                   onFocus={() => (projectStore.currentProject.progress !== 0) ? projectStore.inputProgress = projectStore.currentProject.progress : null}
                                                   value={projectStore.inputProgress}
                                                   min={0}
                                                   max={100}
                                                   style={{width: 175}}
                                                   onChange={(e) => projectStore.inputProgress = e.target.value} required/>
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
            if (projectStore.inputProgress < 0) {
                projectStore.inputProgress = 0;
            } else if (projectStore.inputProgress > 100) {
                projectStore.inputProgress = 100;
            }
            projectStore.currentProject.progress = projectStore.inputProgress;
            projectStore.inputProgress = "";

        }
    }

export default observer(Dashboard);