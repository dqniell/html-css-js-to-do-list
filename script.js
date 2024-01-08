document.querySelectorAll('.add-task-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'todo-input';
        input.placeholder = 'Type your task here...';
        input.onblur = function() {
            if (input.value.trim() !== '') {
                addTask(this);
            }
            placeholder.style.display = 'block';
            this.replaceWith(placeholder);
        };

        this.replaceWith(input);
        input.focus();
        this.style.display = 'none';
    });
});

function addTask(input) {
    var section = input.closest('.section');
    var todoList = section.querySelector('ul');
    var newTodo = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        newTodo.style.textDecoration = this.checked ? 'line-through' : 'none';
    });

    newTodo.appendChild(checkbox);
    newTodo.appendChild(document.createTextNode(input.value));
    todoList.appendChild(newTodo);
}
