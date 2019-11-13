const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:3000/":""; //Check if dev environment

export const postTask = (task) => {
    console.log("This task will be posted: " + task)
    return taskPost(task,"http://localhost:3000")
}

const taskPost = async (json, url) =>{
    return await fetch(url + '/api/task',
        {method:"POST",
            mode: '',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)}).
    then(resp=>resp.json()) + url
}


export const postStakeholder = (stakeholder) => {
    console.log("This task will be posted: " + stakeholder)
    // return post(task,"http://localhost:3000")
    return stakeholderPost(stakeholder,'http://localhost:3000')
}

const stakeholderPost = async (json, url) =>{
    return await fetch(url + '/api/stakeholder',
        {method:"POST",
            mode: '',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)}).
    then(resp=>resp.json()) + url
}
