import React from 'react';
import './Story.css';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

export default function Story() {
    return (
        <div>
            <br/>
           
            <div className="neon-wrapper">
            <span className="txt">Inspirational story we would like to share with you</span>
            <span className="gradient"></span>
            <span className="dodge"></span>
            </div>

            <Zoom>
            <iframe width="1450" height="600" src="https://www.youtube.com/embed/rwgwSomR0B8?list=RDCMUCINb0wqPz-A0dV9nARjJlOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Zoom>

        </div>
    )
}



