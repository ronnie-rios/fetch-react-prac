import './App.css';
import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/ui/NavBar';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<AllPosts />} />
        <Route path='/:id' element={<SinglePost />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
