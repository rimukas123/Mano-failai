//setNotification("Labas pasauli!");
//
//function setNotification(notification) {
//    localStorage.setItem('notification', notification);
//}
//
//function getNotification() {
//    return localStorage.getItem('notification');
//}
//
//alert(getNotification())

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();
    if (newTask) {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.textContent = newTask;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Ištrinti';
      deleteButton.onclick = function () { li.remove(); };
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = '';
      saveTasks();
    }
  }
  
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(taskItem => {
      tasks.push(taskItem.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach(task => {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Ištrinti';
        deleteButton.onclick = function () { li.remove(); };
        li.appendChild(deleteButton);
        taskList.appendChild(li);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadTasks);
  