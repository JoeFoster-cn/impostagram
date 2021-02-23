import Navbar from './components/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Stories from './components/Stories';
import News from '.components/News';
import Navbar from '.components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <News nickname="Zola" avatar="./images/ridge.jpg" image="./images/cake.jpg" caption="Made a cake!" likes="420" />
      <News nickname="Betty" avatar="./images/MrBeluga.jpg" image="./images/beluga.jpg" caption="Me and our kid" likes="69" />
      <Stories/>
    </div>
  );
}

export default App;