import React from "react";
import "./TaskOverview.css"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react";
import {taskStore} from "../stores/TaskStore";
import KanbanTest from "../containers/test/dragdropTest";


function TaskOverview() {
    return(
        <Container>

            <div className="spacer"/>

            <div className="slidez">
                <h6>Overview</h6>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>

            {/*<div id={"KanbanView"}>*/}
            {/*    <KanbanTest>*/}
            {/*    </KanbanTest>*/}
            {/*</div>*/}

            <div>
                <form className="taskinput" onSubmit={getOnSubmit()}>
                    <label>
                        <input name="name" type="text" placeholder="Name"
                               value={taskStore.inputTask.Name}
                               onChange={(e) => taskStore.inputTask.Name = e.target.value} required/>
                    </label>
                    <label>
                        <input name="description" type="text" placeholder="Description"
                               value={taskStore.inputTask.Description}
                               onChange={(e) => taskStore.inputTask.Description = e.target.value}
                               required/>
                    </label>

                    <label>
                        <input name="responsible name" type="text" placeholder="Task Responsible name"
                               value={taskStore.inputTask.Responsible.name}
                               onChange={(e) => taskStore.inputTask.Responsible.name = e.target.value}
                               required/>
                    </label>

                    {/*<label>*/}
                    {/*    <input name="email" type="text" placeholder="Email"*/}
                    {/*           value={taskStore.inputTask}*/}
                    {/*           onChange={(e) => taskStore.inputTask = e.target.value} required/>*/}
                    {/*</label>*/}
                    <input type="submit" value="Submit"/>
                </form>
            </div>

            <div id={"ListView"}>
            <Row className="justify-content-md-center col-lg-12 col-md-12">
                <Col md="auto">
                    <div>
                        <table>
                            <tr>
                                <th>Task name</th>
                                <th>Task Description</th>
                                <th>TaskId</th>
                                <th>Taskworkers</th>
                                <th>Status</th>
                            </tr>
                            {taskStore.taskList.map((task, key) => (
                                <tr>
                                    <td key={key}>{task.Name}</td>
                                    <td key={key}>{task.Description}</td>
                                    <td key={key}>{task.Id}</td>
                                    <td key={key}>{task.Responsible.name}</td>
                                    <td key={key}>{task.Status}</td>
                                </tr>),
                            )}
                        </table>
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
    );
    // function changeFunc() {
    //     return (e) => {
    //       e.default();
    //
    //     };
    // }

    function getOnSubmit() {
        return (e) => {
            e.preventDefault();
            taskStore.inputTask.Status = 'NotStarted';
            taskStore.inputTask.Id = (taskStore.taskList.length + 1) + '';
            taskStore.inputTask.Responsible.id = (taskStore.taskList.length + 2) + '';
            taskStore.taskList.push(taskStore.inputTask);
            taskStore.inputTask = {
                Name: '',
                Description: '',
                Id: '',
                Responsible: {id:"", name:""},
                Status: ''
            };
        };
    }
}

export default observer(TaskOverview);
