import {decorate, observable} from "mobx";

export default class StakeholderStore {
    stakeholders = [{
        name: 'DTU',
        contactperson: 'Kenneth Olsen',
        email: 'keno@dtu.dk',
        direct: true
    }]
}


decorate(StakeholderStore, {
    stakeholders: observable
})