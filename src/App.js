import Navbar from './components/Navbar'
import News from './components/News'
import './App.css';
import Stories from './components/Stories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stories />
      <News nickname="Zola" avatar="./images/ridge.jpg" image="./images/cake.jpg" caption="Made a cake!" likes="420" />
      <News nickname="Betty" avatar="./images/MrBeluga.jpg" image="./images/beluga.jpg" caption="Me and our kid" likes="69" />
    </div>
  );
}

export default App;