body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 800px;
    margin: 50px auto;
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
    text-align: center;
    margin-bottom: 20px;
}

.task-form {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
}

input {
    width: 70%;
    padding: 8px;
    margin-bottom: 10px;
}

button {
    padding: 8px;
    cursor: pointer;
}

.task-list {
    display: flex;
    justify-content: space-between;
}

.pending-tasks,
.completed-tasks {
    width: 48%;
}

h2 {
    border-bottom: 2px solid #333;
    padding-bottom: 8px;
    margin-bottom: 10px;
}