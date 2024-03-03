document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from localStorage on page load
    loadTasks();

    // Add event listener to the form
    document.getElementById('taskForm').addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    });
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a valid task.');
        return;
    }

    const task = {
        id: new Date().getTime(),
        text: taskText,
        completed: false,
    };

    // Save the task to localStorage
    saveTask(task);

    // Reset the input field
    taskInput.value = '';

    // Reload tasks
    loadTasks();
}

function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function loadTasks() {
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');

    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    const tasks = getTasks();

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        li.appendChild(deleteButton);

        if (task.completed) {
            // Mark as completed
            li.style.textDecoration = 'line-through';
            completedTasksList.appendChild(li);
        } else {
            // Mark as pending
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', () => markTaskAsCompleted(task.id));

            li.appendChild(completeButton);
            pendingTasksList.appendChild(li);
        }
    });
}

function deleteTask(taskId) {
    const tasks = getTasks();
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    loadTasks();
}

function markTaskAsCompleted(taskId) {
    const tasks = getTasks();
    const updatedTasks = tasks.map((task) => {
        if (task.id === taskId) {
            task.completed = true;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    loadTasks();
}