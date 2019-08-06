import React from "react"; // Підключаю реакт

const TodoListItem = ({label, important = false}) => {
    // Створюю реакт компонент в який (деструктуризацією) в функцію добавив аргумет що прийме label з t0do-list.js і important в який задасть значення за замовчуванням false а це значеть що текст не буде робитись красним

    const style = { // Задаю стилі для important які будуть красити текст в червоний якщо important буде добавлено в елемент списку todo-list.js
        color: important ? 'tomato' : 'black'
    };

    return ( // Створюю елемент списку в якого є style і в який буде записано значення з label яке передано в файлі todo-list.js
        <span style={style}>{label}</span>
    )
}

export default TodoListItem; // Експортую все для подальшого використання