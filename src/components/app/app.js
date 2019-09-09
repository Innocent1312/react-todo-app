import React, {Component} from 'react';

import AppHeader from "../app-header/app-header"; // Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import SearchPanel from "../search-panel/search-panel";// Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import TodoList from "../todo-list/todo-list";// Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import './app.css'; // Підлкючаю css

export default class App extends Component { // Створив реакт компонент через клас

    state = { // Задав state елементи todo-list
        todoData: [ // Ну тут все просто, створюю масив об'єктів з данними для списка todo
            {label: "Drink Coffee", important: false, id: 1},
            {label: "Make Awesome App", important: true, id: 2},
            {label: "Have a lunch", important: false, id: 3}
        ]

    };

    deleteItem = (id) => { // Функція яка приймає id з todoData

        this.setState(({todoData}) => { // Ініціалізую зміну state у компонета
            const idx = todoData.findIndex((el) => el.id === id); // Записую індекс елемента (того біля якого клінкуни по кнопкі ивдалити) в змінну idx

            const newArray = [ // Не можна міняти напряму state у компонента
                ...todoData.slice(0,idx), // Створюю новий масив який буде такий самий як todoData тільки без того елмента який був "видалений"
                ...todoData.slice(idx + 1)
            ];

            return{ // Переписую todoData новим масивом
                todoData: newArray
            }

        })
    };

    render() {
        return (
            <div className="todo-app">  {/*Створив загальний дів todoшки */}
                <AppHeader toDo={1} done={3}/> {/*Передав данні для appheader */}

                <div className="top-panel d-flex"> {/*Cтворив div пошуку і сортування*/}
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoData} // Витягнув todoData із state
                    onDeleted={this.deleteItem} // Створив власне свойство onDeleted в якому викликав функцію (deleItem)
                /> {/*Записав в todos данні з масиву todoData*/}
            </div>
        );// JSX зборщик кода який збирає всі компоненти в 1 для удобного вивода
    }


};