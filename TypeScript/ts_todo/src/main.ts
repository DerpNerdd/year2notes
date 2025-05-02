interface Task {
  id: number,
  text: string,
  completed: boolean,
}

class ToDoList {
  private Tasks: Task[] = [];

  addTast(todo:Task){
    this.Tasks.push(todo);
  }

  removeTaskById(id: number) {
    this.Tasks = this.Tasks.filter(todo => todo.id !== id);
  }

  getTasks() {
    return this.Tasks;
  }

}

class TodoListUI {
  private todoList: ToDoList;
  
  constructor(todoList: ToDoList) {
    this.todoList = todoList;
  }

  displayTasks() {
    const todoListElement = document.getElementById('todo-list')!;
    todoListElement.innerHTML = ''; // Clear existing tasks
    this.todoList.getTasks().forEach(todo => {
      const todoElement = document.createElement('li');
      todoElement.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''} />
        <span>${todo.text}</span>
        <button class="remove-todo" data-id="${todo.id}">Remove</button>
      `
      todoListElement.appendChild(todoElement);
    });
    
    const checkboxes = todoListElement.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        const todoId = parseInt(target.parentElement?.querySelector('.remove-todo')?.getAttribute('data-id')!);
        const todo = this.todoList.getTasks().find(todo => todo.id === todoId);
        if (todo) {
          todo.completed = target.checked;
        }
      });
    }
    );
}


  addTodo() {
    const newTodoInput = document.getElementById('new-todo') as HTMLInputElement;
    const newTodoText = newTodoInput.value.trim();
    if (newTodoText) {
      const newTodo: Task = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
      };
      this.todoList.addTast(newTodo);
      this.displayTasks();
      newTodoInput.value = '';

    }
  }

  removeTodoById(id: number) {
    this.todoList.removeTaskById(id);
    this.displayTasks();
  }

  bindEvents() {
    document
    .getElementById("add-todo")!
    .addEventListener("click", () => this.addTodo());
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLButtonElement;
      if(target.matches(".remove-todo")) {
        const id = parseInt(target.getAttribute("data-id")!);
        this.removeTodoById(id);
      }
    })
}
}

const todoList = new ToDoList();
const ui = new TodoListUI(todoList);

ui.bindEvents();
ui.displayTasks();