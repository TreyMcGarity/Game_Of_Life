import React from 'react';
import '../styles/Info.css';

const Info = () => {
    return (
        <div className="info">
            <div className="rules">
                <h2>Rules:</h2>
                <p>Any live cell with two or three live neighbours survives.</p>
                <p>Any dead cell with three live neighbours becomes a live cell.</p>
                <p>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</p>
            </div>
        </div>
    )
}

export default Info;