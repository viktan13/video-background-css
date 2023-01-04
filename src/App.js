import Video from './video/video.mp4'
import './App.css';

function App() {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="back-video">
        <source src={Video}/>
      </video>


      <section className="content">
        <h1>Journey</h1>
        <a href="">Explore</a>
      </section>
    </section>
  );
}

export default App;
