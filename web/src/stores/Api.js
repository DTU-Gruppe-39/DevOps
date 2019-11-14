const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:3000/":""; //Check if dev environment

export const postTask = (task) => {
    console.log("This task will be posted: " + JSON.stringify(task));
    return taskPost(task,'https://test-devops69.herokuapp.com')
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
