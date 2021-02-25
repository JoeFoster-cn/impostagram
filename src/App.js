import Navbar from './components/Navbar'
import News from './components/News'
import './App.css';
import Stories from './components/Stories';
import Suggestions from './components/Suggestions';
import Profileinfo from './components/Profileinfo';
import Footer from './components/Footer';
import VidNews from './components/VidNews';

function App() {
  return (
    <>
      <div className="body">
        <Navbar />
        <div className="sidebar">
          <Profileinfo />
          <Stories />
          <Suggestions />
          <Footer />
        </div>
        <div className="newsfeed">
          <VidNews nickname="Eric" avatar="./images/eagle.jpg" video="./videos/video1.mp4" caption="Flew up here for the views" likes="9000" />
          <News nickname="Zola" avatar="./images/ridge.jpg" image="./images/cake.jpg" caption="Made a cake!" likes="420" />
          <News nickname="Betty" avatar="./images/MrBeluga.jpg" image="./images/beluga.jpg" caption="Me and our kid" likes="69" />
        </div>
      </div>
    </>
  );
}

export default App;