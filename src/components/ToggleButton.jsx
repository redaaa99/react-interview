import React,{ Component } from "react";
import Button from "./Button";

class ToggleButton extends Component{

  constructor(props)
  {
    super(props);

    this.state = {
      liked: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
   
    this.setState((prev)=>{
      
      this.props.click(this.state.liked)

      return {
        liked: !prev.liked
      }
    })

  }

  render(){

    let style = !this.state.liked ? { textShadow: "red 0px 1px 12px",color: 'white' } : {color : 'rgb(255, 78, 68)'};

    return <Button class="btn btn--togglelike" style={style} click={this.clickHandler}>❤</Button> 

  }

}

export default ToggleButton;