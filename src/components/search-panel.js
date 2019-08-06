import React from "react"; // Підключаю реакт

const SearchPanel = () => {  // Створюю реакт компонент (див index.js)
    const searchText = 'Type here to search';   // Це текст для placeholder
    return (<input placeholder={searchText}/>); // Тут створюю інпут (в майбутього пошукова стрічка)
};

export default SearchPanel; // Експортую це щоб можна було використати в іншому файлі (наприклад index.js)