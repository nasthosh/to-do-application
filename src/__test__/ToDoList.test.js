const ToDoList = require('../components/TodoList')


test('add todo list', () => {
    const startTodos = []
    const newTodo = {completed: false, id: 3, text: 'Test Input'}
    const expected = [{completed: false, id: 3, text: 'Test Input'}]


    const result = ToDoList(startTodos, newTodo);
    expect(result).toBe(expected);
})
