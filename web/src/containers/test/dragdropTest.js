import React from "react";
import styled from "styled-components";
import Draggable from "../draggable";
import Droppable from "../droppable";

const Wrapper = styled.div`
    width: 100%;
    padding 32px;
    display: flex;
    justify-content: center;
    `;

const Item = styled.div`
    padding: 8px;
    color: #555;
    background-color: white;
    border-radius: 3px;
`;

const droppableStyle = {
    backgroundColor: '#555',
    width: '200px',
    height: '400px',
    margin: '32px'
};

export default class containers extends React.Component{
    render() {
        return (
            <Wrapper>
                <Droppable id="drop1" style={droppableStyle}>
                    <Draggable id="item1"> <Item> Tester</Item></Draggable>
                    <Draggable id="item2"><Item>Dette er en case</Item></Draggable>
                </Droppable>
                <Droppable id="drop2" style={droppableStyle}/>
            </Wrapper>
        )
    }
}