import {decorate, observable} from "mobx";
import {authenticationStore} from "./AuthenticationStore";

class ProjectStore {

    currentProject = {
        id: "",
        name: "",
        progress: 0,
        vision: "",
        isProjectManager: ""
    };

    listOfProjects = [{
        id: "",
        name: "",
        progress: 0,
        vision: ""
    }];

    inputProgress = "";
    inputVision = "";

    getProject() {
        const localurl = "http://localhost:5005/api/authentication/project";
        const serverurl = "https://test-devops69.herokuapp.com/api/authentication/project";
        console.log("Getting Project");
        fetch(serverurl, {
            method: "GET",
            headers: {
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            }
        }).then(function (response) {
            console.log(response.status);
            if (response.ok) {
                response.json().then(function (projects) {
                    console.log(projects);
                    projectStore.listOfProjects = projects;
                })}
            else
                console.log(response.status + ": error while getting project")
        })
    }

    postProject() {

    }
}

decorate(ProjectStore, {
    currentProject: observable,
    listOfProjects: observable,
    inputProgress: observable,
    inputVision: observable
});

export const projectStore = new ProjectStore();