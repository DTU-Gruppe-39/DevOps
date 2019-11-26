const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:3000/":""; //Check if dev environment

export const postTask = (task) => {
    console.log("This task will be posted: " + JSON.stringify(task));
    return taskPost(task,'https://test-devops69.herokuapp.com')
}

export const deleteTask = (task) => {
    console.log("This task will be deleted: " + JSON.stringify(task));
    return taskDel(task,'https://test-devops69.herokuapp.com')
}

const taskPost = async (json, url) =>{
    return await fetch(url + '/api/task',
        {method:"POST",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)})
    // then(resp=>resp.json()) + url
}

export const putTask = (task) => {
    console.log("This task will be posted: " + JSON.stringify(task));
    return taskPut(task,'https://test-devops69.herokuapp.com')
}

const taskPut = async (json, url) =>{
    return await fetch(url + '/api/task',
        {method:"PUT",
         // mode: '',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)})
        // then(resp=>resp.json()) + url
    }
    
const taskDel = async (json, url) =>{
    return await fetch(url + '/api/task',
        {method:"DELETE",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: json})
}

export const postStakeholder = (stakeholder) => {
    console.log("This task will be posted: " + JSON.stringify(stakeholder))
    // return post(task,"http://localhost:3000")
    return stakeholderPost(stakeholder,'https://test-devops69.herokuapp.com')
}

const stakeholderPost = async (json, url) =>{
    return await fetch(url + '/api/stakeholder',
        {method:"POST",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)})
    // then(resp=>resp.json()) + url
}

export const postUsecase = (usecase) => {
    console.log("This task will be posted: " + JSON.stringify(usecase))
    // return post(task,"http://localhost:3000")
    return usecasePost(usecase,'https://test-devops69.herokuapp.com')
}

const usecasePost = async (json, url) =>{
    return await fetch(url + '/api/usecase',
        {method:"POST",
            // mode: '',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)})
    // then(resp=>resp.json()) + url
}
