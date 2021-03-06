import React, { useState } from 'react';
import '../App.css';

const ImageInfo = ({imageData}) => {
    //console.log(imageData.title);
    const [show, setShow] = useState(false);
    const [likes, setLikes] = useState(imageData.likes);
    
    function like() {
        let temp = likes;
        temp++;
        setLikes(temp);
    }

    if(show) {
    return (
        <div>
            <h1> onClick={e => setShow(false)}>{imageData.title}</h1>
            <p>{imageData.description}</p>
            <img className="imageList" src={imageData.url} ></img>
            <p>tykkäykset: {likes}</p>
            <button onClick={e => like()}>tykkää</button>
        </div>
    )
}  else {
    return (
    <div>
        <h1 onClick={e => setShow(true)} >{imageData.title}</h1>
    </div>
    )
}
}
//yhden kuvan kutsuminen: <imageInfo imageData={images[0]}>/
const ImagesInfo = ({images}) => {
    return (
        <div>
            <h1>Tähän se tulee</h1>

            {images.map(img => (<ImageInfo imageData={img} key={img.id}/>
            ))}
        </div>
    )
}

export default ImagesInfo;