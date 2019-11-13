const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment

const postTask = (task) => {
   return post(task,"devops69.herokuapp.com/#/")
}

const post = async (json, url) =>{
    return await fetch(baseUrl + "api/task",{method:"post",headers: {authorizaton:"sometoken"}, body: JSON.stringify(json)}).
    then(resp=>resp.json()) + url

}