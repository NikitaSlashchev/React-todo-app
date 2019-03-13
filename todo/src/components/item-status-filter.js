import React from 'react';
import './item-status-filter.css';
const ItemStatusFilter = () => {
    return (
        <div className="btn-group item-status-filter">
            <button type="button" className="btn btn-danger">All</button>
            <button type="button" className="btn btn-outline-secondary disabled">Active</button>
            <button type="button" className="btn btn-outline-secondary disabled">Done</button>
        </div>
    )
};

export default ItemStatusFilter;