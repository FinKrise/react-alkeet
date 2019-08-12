import React from 'react';
import '../App.css';

const Row = (props) => {
    return (
        <tr>
            <td>{props.course.course}</td>
            <td>{props.course.teacher}</td>
            <td>{props.course.class}</td>
        </tr>
    )
}

const Teht2 = (props) => {
    return (
        <table>
            <Row course = {props.kurssitaulu[0]}/>
            <Row course = {props.kurssitaulu[1]}/>
        </table>
    )
}


export default Teht2;