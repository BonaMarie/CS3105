import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div class="todo-container">
            <ul class="todo-list">
                {filteredTodos.map(todo => (
                    <Todo key={todo.id} todo={todo} text = {todo.text}  todos={todos} setTodos={setTodos}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;