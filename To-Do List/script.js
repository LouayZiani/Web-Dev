const newTaskInput = document.getElementById('new-task');
const addBtn      = document.getElementById('add-btn');
const taskList    = document.getElementById('task-list');

// this is to add task when clicking the button
addBtn.addEventListener('click', addTask);

// this is to allow pressing 'Enter' to add new task to the list
newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
    addTask();
    }
});

function addTask() {
    const text = newTaskInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.className = 'task-item';

    // creating the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // here we create text, of type span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    // now we create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';

    // and assemble everything by using appendChild
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // this is used to clear input from the input bar, every time we enter a value
    newTaskInput.value = '';
    newTaskInput.focus();

    // event listeners for this new item
    checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked); // .checked is used since its a built-in property of checkbox
    });

    deleteBtn.addEventListener('click', () => {
    li.remove();
    });
}
