import React, { Component } from 'react'
import DogCard from '../DogCard';
import axios from 'axios';
import './Dogs.css';

export class Dogs extends Component {
    state = {
        dogs: [],
        isLoaded: false
    };

    componentDidMount() {
        axios.get('http://dog-wiki-cms.test/wp-json/wp/v2/dog')
            .then(res => this.setState({
                dogs: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    };

  render() {
    const { dogs, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div id="dog-container">
          { dogs.map(dog => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>
    );
  }
  
  return <h4>Loading...</h4>;
    
  }
}

export default Dogs
