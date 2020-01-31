import React, { Component } from 'react'

import ToggleButton from './ToggleButton'
import DeleteBtn from './Button'
const images = require.context('../../public/images', true);


class Card extends Component {
  constructor (props) {
    super(props)

    this.state = {
      likes: props.likes,
      dislikes: props.dislikes
    }
  }

  clickHandler (value) {
    if (!value) {
      this.setState(prev=>{
        return {
          likes: prev.likes + 1,

        }
      })
    } else {
      this.setState(prev=>{
        return {
          likes: prev.likes - 1,
        }
      })
    }
  }

  render () {
    let url = images(`./${this.props.image}`);
    return (
      <div className='card'>
        <img className='card__image' src={url} alt=""/>
        <h1 className='card__title'>{this.props.title}</h1>
        <p className="card__subtitle" >
          {this.props.category}
        </p>

        <div className='card__footer'>
          <div> {this.state.likes} Likes </div>
          <div> {this.state.dislikes} Dislikes </div>
        </div>

        <ToggleButton click={this.clickHandler.bind(this)} />
        
        <DeleteBtn class="btn btn--delete" click={this.props.onDelete.bind(this,this.props.id)}>&#10006;</DeleteBtn>

      </div>
    )
  }
}

export default Card
