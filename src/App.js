import './App.css';
import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Router>
        <Router path='/' element={<AllPosts />} />
        <Router path='/' element={<SinglePost />} />
      </Router>
    </div>
    </Router>
  );
}

export default App;
