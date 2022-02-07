import "../styles/VideoCard.css";
import React from "react";

class VideoCard extends React.Component {
  constructor({props}){
    super(props)
  }

  render(){
    return (
      <a href={this.props.link} className="as-videoCard">
          <embed src={this.props.link} className="as-videoCard-video" ></embed> 
        <div className="as-videoCard-info">
          <h2 className="as-videoCard-info-title">{this.props.title}</h2>
          <p>{this.props.date}</p>
        </div>
      </a>
      
    )
  }
}

export default VideoCard