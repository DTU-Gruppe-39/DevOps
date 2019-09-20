import {decorate, observable} from "mobx";

export default class GiraffeStore {
    giraffes = ["Patrick", "Magnus"];
}

decorate(GiraffeStore, {
    giraffes: observable
})