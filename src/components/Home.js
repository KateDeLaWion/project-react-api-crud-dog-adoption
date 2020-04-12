import React from 'react'
import './Home.css';
import Flip from 'react-reveal/Flip';


export default function Home() {
    return (
        <div className="backHome">

<h1>
  <span>M</span>
  <span>I</span>
  <span>S</span>
  <span>S</span>
  <span>I</span>
  <span>O</span>
  <span>N</span>
  <span>!</span>
</h1>
            <Flip left>
            <h2>We care for and provide temporary and indefinite shelter for</h2> 
            <h2>homeless and abandoned dogs, and eventually finding their permanent owners.</h2>
            </Flip>

        </div>
    )
}
