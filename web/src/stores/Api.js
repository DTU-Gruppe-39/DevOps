import {authenticationStore} from "./AuthenticationStore";

// const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:3000/":""; //Check if dev environment

export const postTask = (task) => {
    console.log("This task will be posted: " + JSON.stringify(task));
    return taskPost(task,'https://test-devops69.herokuapp.com')
};

export const deleteTask = (task) => {
    console.log("This task will be deleted: " + JSON.stringify(task));
    return taskDel(task,'https://test-devops69.herokuapp.com')
};

const taskPost = async (json, url) =>{
    return await fetch(url + '/api/task',
        {method:"POST",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: JSON.stringify(json)})
    // then(resp=>resp.json()) + url
};

export const putTask = (task) => {
    console.log("This task will be updated: " + JSON.stringify(task));
    return taskPut(task,'https://test-devops69.herokuapp.com')
};

const taskPut = async (json, url) =>{
    return await fetch(url + '/api/task',
        {method:"PUT",
         // mode: '',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
             'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
        },
        body: JSON.stringify(json)})
        // then(resp=>resp.json()) + url
    };
    
const taskDel = async (json, url) =>{
    return await fetch(url + '/api/task',
        {method:"DELETE",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: json})
};

export const postStakeholder = (stakeholder) => {
    console.log("This task will be posted: " + JSON.stringify(stakeholder))
    // return post(task,"http://localhost:3000")
    return stakeholderPost(stakeholder,'https://test-devops69.herokuapp.com')
};

const stakeholderPost = async (json, url) =>{
    return await fetch(url + '/api/stakeholder',
        {method:"POST",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: JSON.stringify(json)})
    // then(resp=>resp.json()) + url
};

export const putStakeholder = (stakeholder) => {
    console.log("This stakeholder will be updated: " + JSON.stringify(stakeholder));
    return stakeholderPut(stakeholder,'https://test-devops69.herokuapp.com')
};

const stakeholderPut = async (json, url) =>{
    return await fetch(url + '/api/stakeholder',
        {method:"PUT",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: JSON.stringify(json)})
    // then(resp=>resp.json()) + url
};

export const deleteStakeholder = (stakeholder) => {
    console.log("This stakeholder will be deleted: " + JSON.stringify(stakeholder));
    return stakeholderDel(stakeholder,'https://test-devops69.herokuapp.com')
};

const stakeholderDel = async (json, url) =>{
    return await fetch(url + '/api/stakeholder',
        {method:"DELETE",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: json})
};

export const putUsecase = (usecase) => {
    console.log("This usecase will be updated: " + JSON.stringify(usecase));
    return usecasePut(usecase,'https://test-devops69.herokuapp.com')
};

const usecasePut = async (json, url) =>{
    return await fetch(url + '/api/usecase',
        {method:"PUT",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: JSON.stringify(json)})
    // then(resp=>resp.json()) + url
};

export const deleteUsecase = (usecase) => {
    console.log("This usecase will be deleted: " + JSON.stringify(usecase));
    return usecaseDel(usecase,'https://test-devops69.herokuapp.com')
};

const usecaseDel = async (json, url) =>{
    return await fetch(url + '/api/usecase',
        {method:"DELETE",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: json})
};

export const postUsecase = (usecase) => {
    console.log("This task will be posted: " + JSON.stringify(usecase))
    // return post(task,"http://localhost:3000")
    return usecasePost(usecase,'https://test-devops69.herokuapp.com')
};

const usecasePost = async (json, url) =>{
    return await fetch(url + '/api/usecase',
        {method:"POST",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: JSON.stringify(json)})
    // then(resp=>resp.json()) + url
};

export const userPost = async (json, url) =>{
    return await fetch(url + '/api/user',
        {method:"POST",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: JSON.stringify(json)})
};

export const getCurrentUser = async (json, url) =>{
    return await fetch(url + '/api/user/current',
        {method:"GET",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            },
            body: JSON.stringify(json)})
};
