import React from "react"; // Підключаю реакт
import './app-header.css'

const AppHeader = ({toDo, done}) => {  // Створюю реакт компонент (див index.js) який приймає t0Do аргумент і done
    return (
        <div className="app-header d-flex"> {/*Створю дів заголовка +  bootstrap*/}
            <h1>Todo List</h1> {/*Сам заголовок*/}
            <h2>{toDo} more to do, {done} done</h2> {/*Сірий текст (відображає данні передані з index.js)*/}
        </div>
    );

};

export default AppHeader;  // Експортую це щоб можна було використати в іншому файлі (наприклад index.js)