import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h2 className="text-center mt-5">Home Page</h2>} />
        <Route path="/add-task" element={<h2 className="text-center mt-5">Add Task Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
