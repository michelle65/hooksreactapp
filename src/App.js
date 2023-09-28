import logo from './logo.svg';
import './App.css';
import InputElement from './components/InputElement';
import ImageChangeOnMouseOver from './components/ImageChangeOnMouseOver';
import ImageChangeOnScroll from './components/ImageChangeOnScroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ImageChangeOnScroll/>
      </header>
    </div>
  );
}

export default App;
