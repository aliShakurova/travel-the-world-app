import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Navbar />
        <Routes>
          <Route path='/' exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
