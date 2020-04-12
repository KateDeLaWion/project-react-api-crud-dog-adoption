import React, { Component } from 'react';
import DogPhoto from './DogPhoto';
import './DogTab.css';
import Spin from 'react-reveal/Spin';

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
      <Spin>
      <h1 className="neon">Our furry friends in house waiting for adoption </h1>
      </Spin>
      {dogList}
    </div>
  );

}


}

export default App;




