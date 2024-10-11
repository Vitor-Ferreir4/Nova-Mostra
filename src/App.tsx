import './App.css';
import Nav from './TS/Navbar'
import Home from './TS/Home';
import Footer from './TS/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
