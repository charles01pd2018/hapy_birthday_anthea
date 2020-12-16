import stalking_anthea_fb_photo from './stalking_anthea_fb_photo.jpg';
import trader_joes from './trader_joes.jpg';
import salmon_teriyaki from './salmon_teriyaki.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={stalking_anthea_fb_photo} className="App-logo" alt="logo" />
        <p>
         HAPPY 22ND BIRTHDAY ANTHEA!!!
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qzdPTjk9aTg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div>
        <img src={trader_joes} className="App-logo" alt="logo" />
        <img src={salmon_teriyaki} className="App-logo" alt="logo" />
        </div>

      </header>
    </div>
  );
}

export default App;
