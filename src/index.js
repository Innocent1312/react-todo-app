import React from 'react'; // Підлкючили реакт
import ReactDOM from 'react-dom'; // Тоже корисна штука яку обов'язково нада підрубать

import App from "./components/app";

ReactDOM.render(<App/>, document.getElementById('root')); // Це рендер функція (щоб вивети все на екран). При цьому першим має бути що а потім куди
