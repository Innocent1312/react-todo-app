import React from "react"; // Підключаю реакт
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
    //Створив реакт компонент який прийме деструктуріровані ключі об'єкта з index.js

    const style = { // Задаю стилі для important які будуть красити текст якщо important буде добавлено в елемент списку todo-list.js
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item"> {/*Спан для кожного елементу списку */}

            <span
                className="todo-list-item-label" style={style}> {/*Елемент Списку*/}
                {label}
            </span>

          <button type="button"
                  className="btn btn-outline-success btn-sm float-right">  {/*Кнопка з іконкою виділення*/}
            <i className="fa fa-exclamation"/>
          </button>

          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"> {/*Кнопка з іконкою видалення*/}
            <i className="fa fa-trash-o"/>
          </button>

        </span>
    );
};

export default TodoListItem; // Експортую все для подальшого використання