import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export class DogPage extends Component {
  state = {
    dog: [],
    isLoaded: false
  };

  componentDidMount() {
    axios.get(`http://dog-wiki-cms.test/wp-json/wp/v2/dog/${this.props.match.params.id}`)
      .then(res => this.setState({
        dog: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    
    const { dog, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div>
          <Link to='/'>Go Back</Link>
          <img src={dog.image.url} alt={dog.title.rendered} />
          <h2>{dog.title.rendered}</h2>
          <h3>{dog.dog_group}</h3>

          <p dangerouslySetInnerHTML={{ __html: dog.content.rendered }} />
        </div>
      )
    }
    return <h4>Loading...</h4>
    
  }
}

export default DogPage
