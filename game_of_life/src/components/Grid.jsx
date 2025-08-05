import React from 'react';
import Cell from './Cell';
import '../styles/Grid.css';

const Grid = (props) => {
    const rowsArray = [];

    const handleGrid = () => {
        for (let i = 0; i < props.rows; i++) {
            for (let j = 0; j < props.columns; j++) {
                const cellId = `${i}-${j}`;
                const status = props.grid[i][j] ? "cell live" : "cell dead";

                rowsArray.push(
                    <Cell
                        key={cellId}
                        cellId={cellId}
                        status={status}
                        row={i}
                        column={j}
                        selectCell={props.selectCell}
                        cellSize={props.cellSize} // Pass size for dynamic styling
                    />
                );
            }
        }
        return rowsArray;
    };

    // Dynamic grid style: keep total grid width fixed
    const gridSizePx = 600; // total width/height for grid container
    const cellSize = gridSizePx / props.rows;

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${props.columns}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${props.rows}, ${cellSize}px)`,
        margin: "0 auto"
    };

    return (
        <div style={gridStyle}>
            {handleGrid()}
        </div>
    );
};

export default Grid;
