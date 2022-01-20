import "../styles/RecentVideos.css";
import {summitVideo} from "../datas/summit-videos"

function RecentVideos() {

  //retrieve the last video
  const lastVideo = summitVideo.reduce((acc, video) =>
    acc.date < video.date ? acc = video : acc = acc
   )
  
   //retrieve and sort descending all videos 
  const otherRecentVideo = summitVideo;
  otherRecentVideo.sort((a,b) =>{
    if (a.date>b.date) {
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
          <div className="as-videoInfo">
            <h1>{lastVideo.title}</h1>
            <p>{lastVideo.date}</p>
          </div>
        </div>
      </div>

      <div className="as-recentVideos-right">
        <h1>Other recent Vidéo</h1>
        <ul>
          {first3.map((video, index) => (
            <li key={index} className="as-recentOne" >
              <div key={`${video.title}-${index}`} className="as-recentVideoinfo">
                <h2>{video.title}</h2>
                <p>{video.date}</p>
              </div>
                
            </li>
          ))}

        </ul>

      </div>
      
    </div>
  )
}


export default RecentVideos