import React, { Component } from 'react';
import DogPhoto from './DogPhoto';
import './DogTab.css';

class App extends Component {

constructor(props) {

  super(props)

  this.state = {
     dogImages: []
  }
  
}

componentDidMount() {
  fetch("https://dog.ceo/api/breeds/image/random/20")
  .then(res => res.json())
  .then((data) => {
    this.setState({ dogImages: data.message })
  })
}

render() {
  const dogList = this.state.dogImages.map((url, i) => {
    return <DogPhoto key={i} url={url}/>
  })

  return (
    <div className="Tab">
      <h1>Our furry friends in house</h1>
      {dogList}
    </div>
  );
}


}

export default App;




