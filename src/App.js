import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './components/pages/Home';
import Footer from './components/Footer';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;