import {decorate, observable} from "mobx";

class ProgressStore {
    progress = 0;
    inputProgress = "";
}


decorate(ProgressStore, {
    progress: observable,
    inputProgress: observable
});

export const progressStore = new ProgressStore();