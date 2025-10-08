import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [taskList, setTaskList] = useLocalStorage('tasks', []);

  // Add a task only if it does NOT exist (based on id)
  const addTask = (taskDetails) => {
    const exists = taskList.some(task => task.id === taskDetails.id);
    if (exists) {
      console.log('Task already exists with id:', taskDetails.id);
      return;
    }
    setTaskList((prev) => [...prev, taskDetails]);
  };

  // Delete a task by id
  const deleteTask = (taskId) => {
    setTaskList((prevTasks) => prevTasks.filter(task => task.id !== taskId));
  };

  console.log(taskList)
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={<TaskListView tasksToView={taskList} deleteTask={deleteTask} />}
        />
        <Route path="/add-task" element={<AddTaskView addTask={addTask} />} />
      </Routes>
    </Router>
  );
}

export default App;
