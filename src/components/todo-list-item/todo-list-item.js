import React, {Component} from "react"; // Підключаю реакт
import './todo-list-item.css';


export default class TodoListItem extends Component { // extends Component обов'язково для створення класів реакт // Можна зразу експортувати

    render() {
        const {label, important = false} = this.props; // Приймаю свойства об'єктів з app.js

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
};