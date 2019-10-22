import {decorate, observable} from "mobx";

class StakeholdersStore {
    stakeholderList = [{
        name: 'DTU',
        contactperson: 'Kenneth Olsen',
        email: 'keno@dtu.dk',
        direct: true
    }];
    inputStakeholder = {
        name: '',
        contactperson: '',
        email: '',
        direct: true
    }
}


decorate(StakeholdersStore, {
    stakeholderList: observable,
    inputStakeholder: observable
});

export const stakeHolderStore = new StakeholdersStore();