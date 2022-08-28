import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Female from './components/content/female/Female'
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Routes, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
              <div className='Header'><Header/></div>
              <div className='Content'>
                  <Routes>
                      <Route path="/" element={<Content />} />
                      <Route path="/female" element={<Female />} />
                  </Routes>
              </div>
              <div className='Footer'><Footer/></div>
          </div>
      </Router>
  );
}

export default App;
