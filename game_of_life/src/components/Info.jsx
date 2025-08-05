import React from 'react';
import '../styles/Info.css';

const Info = () => {
    return (
    <div className="info">
        <div className="rules">
            <h2>How It Works:</h2>
            <p>
                The grid is made of cells that are either <strong>alive</strong> (white) or <strong>dead</strong> (black).  
                With each new generation, all cells update at the same time based on these simple rules:
            </p>
            <ul>
                <li><strong>Survival:</strong> A living cell stays alive if it has exactly 2 or 3 living neighbors.</li>
                <li><strong>Birth:</strong> A dead cell becomes alive if it has exactly 3 living neighbors.</li>
                <li><strong>Death:</strong> In all other cases, living cells die and dead cells stay dead.</li>
            </ul>
            <p>
                These rules repeat automatically, creating patterns that move, grow, or disappear —  
                without any player input. It’s a simulation, not a traditional game.
            </p>
        </div>
    </div>
    )
}

export default Info;