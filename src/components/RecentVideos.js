import "../styles/RecentVideos.css";
import {summitVideo} from "../datas/summit-inventory"

function RecentVideos() {

  //retrieve the last video
  const lastVideo = summitVideo.reduce((acc, video) =>
    acc.date < video.date ? acc = video : acc = acc
   )
  
   //retrieve and sort descending all videos 
  const otherRecentVideo = summitVideo;
  otherRecentVideo.sort((currentVideo,nextVideo) =>{
    if(currentVideo.date > nextVideo.date) {
      return -1
    }else {
      return 1
    }
  })

  //retrive three most rescent video whitout the last one retrieve and sort descending all videos
  const first3 = otherRecentVideo.slice(1,4)

  return(
    <div className="as-recentVideos">
      <div className="as-recentVideos-left">
        <h1>The last video</h1>
        <div className="as-lastOne">
          <a href={lastVideo.link} >
          <embed src={lastVideo.link} className="as-lastOne-video" ></embed>
          </a>
          <a href={lastVideo.link} >
            <div className="as-videoInfo">
              <h1>{lastVideo.title}</h1>
              <p>{lastVideo.date}</p>
            </div>
            </a>
        </div>
      </div>

      <div className="as-recentVideos-right">
        <h1>Other recent vidéo</h1>
        <ul>
          {first3.map((video, index) => (
            <a href={video.link} key={`${video.title}-${index}-1`}>
              <li key={index} className="as-recentOne" >
                <div key={`${video.title}-${index}`} className="as-recentVideoinfo">
                  <h2>{video.title}</h2>
                  <p>{video.date}</p>
                </div> 
                <embed src={lastVideo.link} className="as-recentOne-video" ></embed>  
              </li>
            </a>
            
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default RecentVideos