import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createpost">Create A Post </Link>
        <Routes>
          <Route path='/' exact element={< Home/>}/>
          <Route path='/createpost' exact element={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
