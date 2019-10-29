import {decorate, observable} from "mobx";

class VisionStore {
    vision = "";
    inputVision = "";
}


decorate(VisionStore, {
    vision: observable,
    inputVision: observable
});

export const visionStore = new VisionStore();