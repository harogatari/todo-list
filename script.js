document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('todo-form');
  var input = document.getElementById('todo-input');
  var list = document.getElementById('todo-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var task = input.value.trim();

    if (task !== '') {
      var listItem = document.createElement('li');
      var taskText = document.createElement('span');
      var removeButton = document.createElement('span');

      taskText.textContent = task;
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');

      listItem.appendChild(taskText);
      listItem.appendChild(removeButton);
      list.appendChild(listItem);

      input.value = '';
    }
  });

  list.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-btn')) {
      var listItem = event.target.parentNode;
      list.removeChild(listItem);
    }
  });
});
