import React from 'react';

function TaskListView({ tasksToView, deleteTask }) {
    return (
        <div className="container my-4">
            <h2>Task List</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th style={{ width: '120px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasksToView.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No tasks available.
                                </td>
                            </tr>
                        ) : (
                            tasksToView.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.priority}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteTask(task.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskListView;
