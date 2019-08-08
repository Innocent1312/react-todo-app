import React from 'react';

import AppHeader from "../app-header/app-header"; // Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import SearchPanel from "../search-panel/search-panel";// Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import TodoList from "../todo-list/todo-list";// Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import ItemStatusFilter from "../item-status-filter/item-status-filter";

import './app.css'; // Підлкючаю css

const App = () => { // Більшість реакт компонентів створюжться через функцію стрілку

    const todoData = [ // Ну тут все просто, створюю масив об'єктів з данними для списка todo
        {label: "Drink Coffee", important: false, id: 1},
        {label: "Make Awesome App", important: true, id: 2},
        {label: "Have a lunch", important: false, id: 3}
    ];

    return (
        <div className="todo-app">  {/*Створив загальний дів todoшки */}
            <AppHeader toDo={1} done={3}/> {/*Передав данні для appheader */}

            <div className="top-panel d-flex"> {/*Cтворив div пошуку і сортування*/}
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoData}/> {/*Записав в todos данні з масиву todoData*/}
        </div>
    );// JSX зборщик кода який збирає всі компоненти в 1 для удобного вивода
};

export default App;