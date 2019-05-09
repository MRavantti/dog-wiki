import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Dogs from '../Dogs'
import DogPage from '../DogPage'

function App() {
  return (
    <Router>
      <Fragment>
        <h1>Dog Wiki</h1>
          <Route exact path='/' component={Dogs} />
          <Route exact path='/dog/:id' component={DogPage} />
      </Fragment>
    </Router>
  );
}

export default App;
