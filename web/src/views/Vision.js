import React from "react";
import {observer} from "mobx-react";
import {visionStore} from "../stores/VisionStore";

    function Vision() {
        return (
            <div>
                <div className="vision-input">
                {/*    <div class="form-group shadow-textarea">*/}
                        <form className="visioninputform" onSubmit={getOnSubmit()}>
                            <label>
                                <textarea class="form-control z-depth-1" rows="5" cols="50" name="vision" type="text" placeholder="Click to add/edit vision" onFocus={()=>visionStore.inputVision = visionStore.vision}
                                       value={visionStore.inputVision}
                                       onChange={(e) => visionStore.inputVision = e.target.value} required/>
                            </label>
                            <input type="submit" value="Save"/>
                        </form>
                    {/*</div>*/}
                </div>
                <div className="vision">
                    <h6>{visionStore.vision}</h6>
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