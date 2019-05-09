import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class DogItem extends Component {
  render() {
    const { id, title, excerpt, image, dog_group } = this.props.dog;
    
    return (
      <div>
        <img src={image.url} alt={title.rendered} />
        <h2>{title.rendered}</h2>
        <h3>{ dog_group }</h3>
        <p dangerouslySetInnerHTML={{__html: excerpt.rendered }} />
        
        <button>
        <Link to={`/dog/${id}`} >Read more</Link>
        </button>
      </div>
    )
  }
}

export default DogItem
