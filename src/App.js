import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect


import Home from './components/Home' ;
import Story from './components/Story';
import DogTab from './components/DogTab' ;
import Crud from './components/Crud' ;


export default class App extends Component {
  

  render() {
    
    return(
      
      <div className="App">
        <Zoom>
          <Router>
            
            <nav>   
              <Link to="/home">Home</Link> .....
              <Link to="/story">Inspirational story</Link> .....
              <Link to="/friends">Our furry friends</Link>.....
              <Link to="/reviews">Reviews</Link> 
            </nav>
            

            <Switch> 

              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/story">
                <Story />
              </Route>
              <Route exact path="/friends">
                <DogTab />
              </Route>
              <Route exact path="/reviews">
                <Crud />
              </Route>
                         
            </Switch>

          </Router>

          </Zoom>
      </div>
     )
    
  }
}
