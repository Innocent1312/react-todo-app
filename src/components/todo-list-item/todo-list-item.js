import React, {Component} from "react"; // Підключаю реакт
import './todo-list-item.css';


export default class TodoListItem extends Component { // extends Component обов'язково для створення класів реакт // Можна зразу експортувати

    state = { // State - оголошує внутрішній стан компонента в react. Його можна задати як в конструкторі так і в тілі класу
        done: false,  // State задається об'єктом в який ми можемо передавати ключі (внутрішній стан компоненів)
        important: false // Для important і done це false за замовчуванням
    };

    onLabelClick = () => { // Створюю функцію СТРІЛКУ (ВАЖНО!!!) щоб відловлювати клік по назві todoшки
        this.setState(({done})=>{//  функція з деструктурованим параметром done зі state відловлює останні зміни по компоненту
            return{
                done: !done // Код означає - поміняй стан (state) елемента (done) на протижежний
            }
        });
    };

    onMarkImportant = () =>{ // Створив функцію стрілку щоб відловлювати клік по кнопці "!"
        this.setState(({important})=> { //  функція з деструктурованим параметром important зі state відловлює останні зміни по компоненту
            return {
                important: !important // Код означає - поміняй стан (state) елемента (important) на протижежний
            }
        });
    };
    render() {
        const {label} = this.props; // Приймаю свойства об'єктів з app.js
        const { done, important} = this.state; // Витягнули done із state деструктуризацією

        let classNames = 'todo-list-item'; // Створили змінну з ім'ям класу (Юзаєм в 30 строчці)
        if( done ){ // Якщо done в state = true
            classNames += ' done'; // То добавляємо до classNames клас done який зачеркне елементи
        }

        if (important){
            classNames += ' important';

        }

        // const style = { // Задаю стилі для important які будуть красити текст якщо important буде добавлено в елемент списку todo-list.js
        //     color: important ? 'steelblue' : 'black',
        //     fontWeight: important ? 'bold' : 'normal'
        // };

        return (
            <span className={classNames}> {/*Спан для кожного елементу списку */}

            <span
                    className="todo-list-item-label"
                    onClick={this.onLabelClick} > {/*Елемент Списку*/} {/*Добавляю слухач нажатія на текст який верне функцію onLabelClick*/}
                    {label}
            </span>

          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}>  {/*Кнопка з іконкою виділення*/} {/*Добавляю слухач що верне функцію onMarkImportant*/}
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
