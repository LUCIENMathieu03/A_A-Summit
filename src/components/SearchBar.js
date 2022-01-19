import "../styles/SearchBar.css";
import React from "react";
import { summitVideo } from "../datas/summit-videos";

class SearchBar extends React.Component{
  constructor({props}){
    super(props)
    this.state = { 
      video : "hello"
    }

    this.searchedText = "";
    this.summitVideo = summitVideo;

    this.summitVideo.sort((a,b) =>{
      if (a.date>b.date) {
        return -1
      }else {
        return 1
      }
    })
  }

  
  _searchTextInputChanged(e) {
    this.searchedText = e.target.value;
    console.log(e.target.value)
  }

  _searchVideo(){
    const searchedVideo = this.state.video;
    console.log(searchedVideo);
    this._onStart()
    console.log(this.state)
  }

  _onStart(){
    this.setState({ video : " hi"})
    
  }

  render(){
    return (
      <div className="as-searchBar">
        <input 
          type="text" id="myInput"
          onChange={ (e) => this._searchTextInputChanged(e)} 
        />
        <button
          onClick={() => {this._searchVideo()}}
        >Search</button>
      </div>
    )
  }
  
}

export default SearchBar