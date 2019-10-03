import {decorate, observable} from "mobx";

export default class StakeholdersStore {
    stakeholderList = [{
        name: 'DTU',
        contactperson: 'Kenneth Olsen',
        email: 'keno@dtu.dk',
        direct: true
    }]
}


decorate(StakeholdersStore, {
    stakeholderList: observable
})