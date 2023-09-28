import logo from './logo.svg';
import './App.css';
import InputElement from './components/InputElement';
import ImageChangeOnMouseOver from './components/ImageChangeOnMouseOver';
import ImageChangeOnScroll from './components/ImageChangeOnScroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ImageChangeOnScroll/>
      </header>
    </div>
  );
}

export default App;
