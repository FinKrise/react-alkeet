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
    if(props.show){
    return (
        <table>
            <tbody>
           {/*<Row course = {props.kurssitaulu[0]}/>
            <Row course = {props.kurssitaulu[1]}>*/}
            {props.course.map(c => (
                <Row course = {c} key = {c.id} />
                ))}
            </tbody>
        </table>
    )
}  else {
    return <div /> 
}
}


export default Teht2;