import React from 'react';
import './App.css';
import Dogs from '../Dogs'
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <h1>App</h1>
      
          <Route exact path='/' component={Dogs} />

        </div>
    </Router>
  );
}

export default App;
