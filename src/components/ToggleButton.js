import React from 'react';
import '../App.css';

function ToggleButton({show, clickHandler,buttonNumber}){
    let text = "";
    if(!show){
        text = "näytä";
    } else {
        text = "Piilota";
    }
    return (
    <div className="toggleButton">
        <button onClick={e => clickHandler(buttonNumber)}>{text} </button>
    </div>
    );
}

export default ToggleButton;