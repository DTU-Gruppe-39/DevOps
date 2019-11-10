import {decorate, observable} from "mobx";

class UsecasesStore {
    usecasesList = [{
        id: 1,
        userStory: 'As project manager I wish to create new projects',
        priority: '4',
        responsible: 'Magnus'
    }];
    inputUsecases = {
        id: null,
        userStory: '',
        priority: '',
        responsible: ''
    }
}


decorate(UsecasesStore, {
    usecasesList: observable,
    inputUsecases: observable
});

export const usecasesStore = new UsecasesStore();