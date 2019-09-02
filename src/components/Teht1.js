import React from 'react';
import '../App.css';

const Teht1 = (props) => {
    if(props.show){
    return (
    <div class="yhtT">
        <li>{props.partYht[0]}</li>
        <li>{props.partYht[1]}</li>
    </div>
    )
}      else {
    return <div /> 
}
}

export default Teht1;