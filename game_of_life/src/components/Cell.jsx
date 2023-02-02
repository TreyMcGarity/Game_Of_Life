import React from 'react';
import '../styles/Cell.css';

const Cell = props => {
    const handleCell = () => {
        props.selectCell(props.row, props.column)
    }

    return(
        <div 
            id={props.id}
            className={props.status}
            onClick={handleCell}
        />
    )
}

export default Cell;