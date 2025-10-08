import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';

import useLocalStorage from './hooks/useLocalStorage';

function App() {

  // Whole functions needs improvement
  const [taskList, setTaskList] = useLocalStorage('tasks', [])

  const addTask = (taskDetails) => {
    if (taskList.indexOf(taskDetails) == -1) {
      return;
    }

    setTaskList((prev) => [...prev, taskDetails])
  }

  const deleteTask = (taskId) => {
    for (let i = 0; taskList.length; i++) {
      if (taskList.id != taskId) {
        return;
      }
    }

    setTaskList((prevTasks) => prevTasks.filter((t) == taskToDelete));
  }

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<TaskListView tasksToView={taskList} deleteTask={deleteTask} />} />
        <Route path="/add-task" element={<AddTaskView addTask={addTask} />} />
      </Routes>
    </Router>
  );
}

export default App;
