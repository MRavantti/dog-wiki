import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Dogs from '../Dogs'
import DogPage from '../DogPage'

function App() {
  return (
    <Router>
      <Fragment>
          <Route exact path='/' component={Dogs} />
          <Route exact path='/dog/:id' component={DogPage} />
      </Fragment>
    </Router>
  );
}

export default App;
