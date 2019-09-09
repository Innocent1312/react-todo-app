import React from "react"; // Підключаю реакт

import TodoListItem from "../todo-list-item/todo-list-item"; // Імпортую елемент щоб вставити його в список
import './todo-list.css';

const TodoList = ({todos, onDeleted}) => { // Створюю реакт компонент і деструктуризацією приймаю значення елементів з index.js
    //приймаю значення onDeleted із tod0-list-item

    const elements = todos.map((item) => {// Створюю змінну elements яка отримує t0doData item записує в нього ключі об'єктів з todoData (spread)
       const {id, ...itemProps} = item;  // деструктуризацією достаю свойство id з об'єкта item і через rest (...) достаю всі інші ключі і записую їх в itemProps

        return(
           <li key={id} className={'list-group-item'}> {/*Передаю сюди id яке достав в 8 строчці*/} {/*Підрубаю bootstrap клас*/}
               <TodoListItem {...itemProps}
              onDeleted = {()=> onDeleted(id)} /> /{/*Передаю значення onDeleted з id того елемента який має бути видалений*/}
           </li>
       )
    });

    return ( // отримує elements і виводить його
        <ul className={'list-group todo-list'}> {/*Підрубаю bootstrap клас*/}
            {elements} {/*Виводжу сам список в якому будуть елементи*/}
        </ul>
    );
};
export default TodoList; // Експортую елемент в index.js