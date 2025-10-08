import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<TaskListView/>} />
        <Route path="/add-task" element={<AddTaskView/>} />
      </Routes>
    </Router>
  );
}

export default App;
