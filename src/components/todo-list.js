import React from "react"; // Підключаю реакт

import TodoListItem from "./todo-list-item"; // Імпортую елемент щоб вставити його в список

const TodoList = ({todos}) => { // Створюю реакт компонент і деструктуризацією приймаю значення елементів з index.js

    const elements = todos.map((item) => { // Створюю змінну elements яка отримує t0do item і задає йому значення ключі об'єктів (spread)які записані в index.js
       return(
           <li>
               <TodoListItem {...item} />
           </li>
       )
    });

    return (
        <ul>
            {elements}
        </ul>
    );
};
export default TodoList; // Експортую елемент в index.js