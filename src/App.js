import Navbar from './components/Navbar'
import News from './components/News'
import './App.css';
import Stories from './components/Stories';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stories />
      <Suggestions />
      <News nickname="Zola" avatar="./images/ridge.jpg" image="./images/cake.jpg" caption="Made a cake!" likes="420" />
      <News nickname="Betty" avatar="./images/MrBeluga.jpg" image="./images/beluga.jpg" caption="Me and our kid" likes="69" />
    </div>
  );
}

export default App;