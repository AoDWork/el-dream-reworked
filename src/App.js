import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <div className='Header'><Header /></div>
        <div className='Content'><Content /></div>
        <div className='Footer'><Footer /></div>
    </div>
  );
}

export default App;
