import React from 'react'; // Підлкючили реакт
import ReactDOM from 'react-dom'; // Тоже корисна штука яку обов'язково нада підрубать


import AppHeader from "./components/app-header"; // Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import SearchPanel from "./components/search-panel";// Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import TodoList from "./components/todo-list";// Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import ItemStatusFilter from "./components/item-status-filter";

import './index.css'; // Підлкючаю css

const App = () => { // Більшість реакт компонентів створюжться через функцію стрілку

    const todoData = [ // Ну тут все просто, створюю масив об'єктів з данними для списка todo
        {label: "Drink Coffe", important: false, id: 1},
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


ReactDOM.render(<App/>, document.getElementById('root')); // Це рендер функція (щоб вивети все на екран). При цьому першим має бути що а потім куди
