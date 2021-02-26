import Navbar from './components/Navbar'
import News from './components/News'
import './App.css';
import Stories from './components/Stories';
import Suggestions from './components/Suggestions';
import Profileinfo from './components/Profileinfo';
import Footer from './components/Footer';
import VidNews from './components/VidNews';
import React from 'react';

function App() {
  const [darkTheme, setDarkTheme] = React.useState(false)
  return (
      <div className={darkTheme ? "body-dark" : "body"}>
        <Navbar />
          <div className="button-cont">
            <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>Dark Mode</button>
            </div>
        <div className={darkTheme ? "sidebar-dark" : "sidebar"}>
          <Profileinfo />
          <Stories />
          <Suggestions />
          <Footer />
        </div>
        <div className={darkTheme ? "newsfeed-dark" : "newsfeed"}>
          <VidNews nickname="Ellie" avatar="./images/ellie.jpg" video="./videos/video2.mp4" caption="Out for a walk with the girls" likes="12" />
          <VidNews nickname="Eric" avatar="./images/eagle.jpg" video="./videos/video1.mp4" caption="Flew up here for the views" likes="90" />
          <News nickname="Zola" avatar="./images/ridge.jpg" image="./images/cake.jpg" caption="Made a cake!" likes="42" />
          <News nickname="Betty" avatar="./images/MrBeluga.jpg" image="./images/beluga.jpg" caption="Me and our kid" likes="69" />
        </div>
      </div>
  );
}

export default App;