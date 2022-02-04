import '../styles/App.css';
import Banner from './Banner';
import RecentVideos from './RecentVideos';
import SearchBar from './SearchBar'



function App() {
  return (
    <div className="App">
      <Banner />
      <RecentVideos />
      <SearchBar />
      
    </div>
  );
}

export default App;
