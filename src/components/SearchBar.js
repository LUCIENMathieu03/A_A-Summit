import "../styles/SearchBar.css";
import React from "react";
import { summitVideo } from "../datas/summit-videos";
import VideoCard from "./VideoCard";
import RecentVideos from "./RecentVideos"

class SearchBar extends React.Component{
  constructor({props}){
    super(props)
    this.state = {
      video :[],
      text : "",
      checkbox : {
        development :false,
        cloud:false,
        security:false,
      },
      suggestion : [],
      inputText :""
    }

    this.searchedText = "";
    this.summitVideo = summitVideo.sort((a,b) =>{
      if (a.date>b.date) {
        return -1
      }else {
        return 1
      }
    });
  }

  
  
  _searchTextInputChanged(e) {

    this.searchedText = e.target.value.toString().toLowerCase()
    
    let suggestion =[]
    if(e.target.value.length > 0){
      const regex = new RegExp(`^${e.target.value}`, 'i')
      const videoTitle = this.summitVideo.map((video)=>(video.title))
      suggestion = videoTitle.sort().filter((v) =>regex.test(v))
    }else if (e.target.value.length == 0){
      this.setState({ video: this.summitVideo})
    }
    this.setState(() => ({ suggestion, text : e.target.value  }))
  }

  _renderSuggestion(){
    const {suggestion} = this.state;
    if (suggestion.length === 0 ){
      return null
    }

    return (
        <ul className="as-autoComplete">
          {suggestion.map((video,index)=>(
            <li 
              key={`SB-autoComplete-${index}`}
              onClick={()=>this._suggestionSelected(video)}
            >{video}</li>
          ))}
        </ul>
    )
  }

  _suggestionSelected(value){
    this.searchedText = value.toString().toLowerCase();
    this.setState(()=>({
      text : value,
      suggestion : []
    }))
  }

  _searchVideo(){
    this.setState({ video: this.summitVideo.filter((video) => (
      video.title.toLowerCase().includes(this.searchedText)
    ))})
  }

  componentDidMount(){
    this.setState({ video: this.summitVideo})
  }

  // componentDidUpdate(){
  //   console.log(this.state.video)
  // }
  
  _filterArrByTopic = (e) => {
    console.log( e.target)
    
    if (e.target.checked==true) {
      this.setState({ video: this.summitVideo.filter((video) => (
        video.tags.toLowerCase().includes(e.target.name.toLowerCase())
      ))})
    } else if (e.target.checked==false) {
      this.setState({ video: this.summitVideo.filter((video) => (
        video.tags.toLowerCase().includes("")
      ))})
    } 
  }

  _filterArrByTarget =(e)=>{
    console.log( e.target)
    if (e.target.checked==true) {
      this.setState({ video: this.summitVideo.filter((video) => (
        video.targetAudiance.toLowerCase().includes(e.target.name.toLowerCase())
      ))})
    } else if (e.target.checked==false) {
      this.setState({ video: this.summitVideo.filter((video) => (
        video.targetAudiance.toLowerCase().includes("")
      ))})
    } 
  }

  render() {
    
    return (
      <div className="main"> 
        <h1 className="as-searchBar-title">Search for more video</h1>
        <div className="as-searchBar">
          
            <input 
              value={this.state.text}
              type="text" id="myInput"
              onChange={ (e) => this._searchTextInputChanged(e)} 
              placeholder="Search a video"
            />
          
          <button
            onClick={() => {this._searchVideo()}}
          >Search</button>
        </div>

        

        <div className="as-SB-main">
        {this._renderSuggestion()}
        <div className="as-filter">
          <p>Filter videos by: </p>
          <br/>
          <p>topic </p>
          <input type="checkbox" className="check" name="development" onChange={this._filterArrByTopic} /> Development <br/>
          <input type="checkbox" className="check" name="Cloud" onChange={this._filterArrByTopic} /> Cloud <br/>
          <input type="checkbox" className="check" name="Security" onChange={this._filterArrByTopic} /> Security<br/>
          <input type="checkbox" className="check" />  ...<br/>

          <br/>
          <br/>

          <p>target audiance</p>
          <input type="checkbox" className="check" name="Devs" onChange={this._filterArrByTarget} /> Devs <br/>
          <input type="checkbox" className="check" name="Architect" onChange={this._filterArrByTarget} /> Architect <br/>
          <input type="checkbox" className="check" name="Managers" onChange={this._filterArrByTarget} /> Managers<br/>
          <input type="checkbox" className="check" name="Security" onChange={this._filterArrByTarget}/>  Security<br/>
        </div>
        
          <ul className="as-card-grid">
            {this.state.video.map((video, index) => (
              <li 
                key={`SB-${index}`} 
                className="as-card"
              >
                  <VideoCard
                    title={video.title}
                    date={video.date}
                  />
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    )
  }
}

export default SearchBar

