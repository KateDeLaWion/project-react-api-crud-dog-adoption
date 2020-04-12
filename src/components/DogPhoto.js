import React from 'react'
import './DogPhoto.css';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

export default function DogPhoto(props) {
    return (
        <div>
            <Zoom>
            <img src={props.url} className="dogPhotoSize"/>
            </Zoom>
        </div>
    )
}
