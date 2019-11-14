import React from "react";
import {observer} from "mobx-react";
import {usecasesStore} from "../stores/UsecasesStore";
import api, {postUsecase} from "../stores/Api";
import "./Usecases.css";

    function Usecases() {
        return(
            <div className="container">
                <div class="row justify-content-center">
                        <div className="usecase-form">
                            <form className="usecaseinput" onSubmit={getOnSubmit()}>
                                <label>
                                    <input name="userStory" type="text" placeholder="User story"
                                           value={usecasesStore.inputUsecases.userStory}
                                           onChange={(e) => usecasesStore.inputUsecases.userStory = e.target.value}
                                           required/>
                                </label>
                                <label>
                                    <input name="priority" type="number" placeholder="Priority"
                                           value={usecasesStore.inputUsecases.priority}
                                           onChange={(e) => usecasesStore.inputUsecases.priority = e.target.value}
                                           required/>
                                </label>
                                <label>
                                    <input name="name" type="text" placeholder="Responsible"
                                           value={usecasesStore.inputUsecases.responsible}
                                           onChange={(e) => usecasesStore.inputUsecases.responsible = e.target.value}
                                           required/>
                                </label>
                                <input type="submit" value="Submit"/>
                            </form>
                    </div>
                    <div className="usecaseList d-flex justify-content-center">
                        <ul>
                            <h3 className="d-flex justify-content-center">Usecases</h3>
                            <table>
                                <tr>
                                    <th>ID</th>
                                    <th>User story</th>
                                    <th>Priority (1-5)</th>
                                    <th>Responsible</th>
                                </tr>
                                {usecasesStore.usecasesList.map((usecase, key) => (
                                    <tr>
                                        <td key={key}>{"U" + usecase.id}</td>
                                        <td key={key}>{usecase.userStory}</td>
                                        <td key={key}>{usecase.priority}</td>
                                        <td key={key}>{(usecase.responsible)}</td>
                                    </tr>),
                                )}
                            </table>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }

    function getOnSubmit() {
        return (e) => {
            e.preventDefault();
            usecasesStore.inputUsecases.id = usecasesStore.usecasesList.length + 1;
            usecasesStore.usecasesList.push(usecasesStore.inputUsecases);
            postUsecase(usecasesStore.inputUsecases);
            usecasesStore.inputUsecases = {
                id: null,
                userStory: '',
                priority: '',
                responsible: ''
            };
        };
    }

export default observer(Usecases);