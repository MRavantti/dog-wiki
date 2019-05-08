import React, { Component } from 'react'
import axios from 'axios';

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
    console.log(this.state);
    
    return (
      <div>
        
      </div>
    )
  }
}

export default Dogs
