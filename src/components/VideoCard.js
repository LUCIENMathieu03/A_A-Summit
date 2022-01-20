import "../styles/VideoCard.css";
import React from "react";

class VideoCard extends React.Component {
  constructor({props}){
    super(props)
  }

  render(){
    return (
      <div className="as-videoCard">

        <div className="as-videoCard-info">
          <h2>{this.props.title}</h2>
          <p>{this.props.date}</p>
        </div>
      </div>
      
    )
  }
}

export default VideoCard