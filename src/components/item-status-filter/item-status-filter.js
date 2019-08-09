import React, {Component} from 'react'; // Підлкючив React і Component (потрібен для класів)

import './item-status-filter.css'; // Підлкючив стилі

export default class ItemStatusFilter extends Component{ // Створив клас і зразу його експортував

    render() {
        return (
            <div className="btn-group"> {/*Група кнопок*/}
                <button type="button"
                        className="btn btn-info">All</button>
                <button type="button"
                        className="btn btn-outline-secondary">Active</button>
                <button type="button"
                        className="btn btn-outline-secondary">Done</button>
            </div>
        );
    };
}



