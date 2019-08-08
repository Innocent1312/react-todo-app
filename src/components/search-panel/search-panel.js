import React from "react"; // Підключаю реакт
import './search-panel.css' // Підключаю стилі

const SearchPanel = () => {  // Створюю реакт компонент (див index.js)
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search" /> // Рядок пошуку
    );
};

export default SearchPanel; // Експортую це щоб можна було використати в іншому файлі (наприклад index.js)