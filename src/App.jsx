import './app.scss'
import Navbar from './Components/0-Navbar/Navbar';
import Home from './Components/1-Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="sections">
        <Home/>
      </div>
    </div>
  );
}

export default App;
