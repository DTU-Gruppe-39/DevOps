import {decorate, observable} from "mobx";
const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment
const STATES = {FAILED:"fail",LOADING:"load",DONE:"done" }

export default class GiraffeStore {
    giraffes = ["Loading giraffes"];
    storeState = STATES.LOADING;
    //giraffes = ["Patrick", "magnus"];
    constructor(props) {
        this.fetchGiraffes();
    }

    // fetchGiraffes (){
    //     fetch(baseUrl + "rest/giraffes").then(
    //         (response)=> response.json().then(
    //             (json)=> this.giraffes=json
    //         )
    //     )
    // }


     fetchGiraffes = async ()=>{
        try{
            const res = await fetch(baseUrl + "rest/giraffes");
            const json = await res.json();
            this.giraffes = json;
            this.storeState = STATES.DONE;
            return json;
        }
        catch (e) {
            this.storeState = STATES.FAILED;
            console.log(e);
            alert("FAIL" + e);
        }
    }


}

decorate(GiraffeStore, {
    giraffes: observable
})