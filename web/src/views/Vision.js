import React from "react";
import {observer} from "mobx-react";
import {visionStore} from "../stores/VisionStore";
import "./Vision.css";

    function Vision() {
        return (
                <div className="vision-input">
                    <div class="container">
                        <div class="row justify-content-center">
                            <form className="visioninputform" onSubmit={getOnSubmit()}>
                                <div class="col-10">
                                    <label>
                                        <textarea class="form-control z-depth-1" rows="5" cols="50" name="vision" type="text" placeholder="Click to add/edit vision" onFocus={()=>visionStore.inputVision = visionStore.vision}
                                               value={visionStore.inputVision}
                                               onChange={(e) => visionStore.inputVision = e.target.value} required/>
                                    </label>
                                    <div class="col-2">
                                        <input type="submit" value="Save"/>
                                    </div>
                                </div>
                            </form>
                            <div className="w-100"></div>
                            <div className="vision">
                                <h6>{visionStore.vision}</h6>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

    function getOnSubmit() {
        return (e) => {
            e.preventDefault();
            visionStore.vision = visionStore.inputVision;
            visionStore.inputVision = "";

        }
    }

export default observer(Vision);