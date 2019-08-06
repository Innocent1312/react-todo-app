import React from 'react'; // Підлкючили реакт
import ReactDOM from 'react-dom'; // Тоже корисна штука яку обов'язково нада підрубать

import AppHeader from "./components/app-header"; // Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import SearchPanel from "./components/search-panel";// Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)
import TodoList from "./components/todo-list";// Підключили зовнішні файли (потрібно для гарного оформлення прилоги в сенсі коду всередині)

const App = () => { // Більшість реакт компонентів створюжться через функцію стрілку

    const todoData = [ // Ну тут все просто, створюю масив об'єктів з данними для списка todo
        {label: "Drink Coffe", important: false},
        {label: "Make Awesome App", important: true},
        {label: "Have a lunch", important: false}
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos = {todoData}/> {/* Тут створили свойство todos для компонента TodoList і передали в нього масив todoData*/}
        </div>
    ) // Код JSX який прям чудо робить. <AppHeader/> та інше це мої створені компоненти в зовнішніх файлах які я добавив
};


ReactDOM.render(<App/>, document.getElementById('root')); // Це рендер функція (щоб вивети все на екран). При цьому першим має бути що а потім куди
