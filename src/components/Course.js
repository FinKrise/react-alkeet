import React from 'react';
import '../App.css';

const Course = (props) => {
    return (
    <div>
        <h1>{props.partName} {props.partDate[0]}</h1>
        <ul>
            {/*<li>{props.partContents[0]}</li>
            <li>{props.partContents[1]}</li>
            <li>{props.partContents[2]}</li>
            <li>{props.partContents[3]}</li> */}
            {props.partContents.map(x => <li>{x}</li>)}
        </ul>
    </div>
    )
}


export default Course;