import React from 'react';
import '../styles/Controls.css';

const Controls = props => {
    const mainControlLabel = props.isRunning ? 'Pause simulation' : 'Play simulation';
    const mainControlMark = props.isRunning ? '❚❚' : '▶';
    
    return (
    <div className="controls">
        <div className="playback" role="group" aria-label="Simulation controls">
            <button
                className="icon-button"
                onClick={props.rewind}
                aria-label="Rewind one generation"
                type="button"
                disabled={!props.canRewind}
            >
                <span className="control-mark">&lt;&lt;</span>
            </button>
            <button className="icon-button" onClick={props.togglePlayPause} aria-label={mainControlLabel} type="button">
                <span className="control-mark" aria-hidden="true">{mainControlMark}</span>
            </button>
            <button className="icon-button" onClick={props.fastforward} aria-label="Fast forward simulation" type="button">
                <span className="control-mark" aria-hidden="true">&gt;&gt;</span>
            </button>
        </div>

        <button className="button" onClick={props.clear} type="button">Reset Grid</button>

        <div className="slider-container">
            <label htmlFor="gridSize">
                Grid Size: {props.rows} x {props.columns}
            </label>
            <input
                type="range"
                id="gridSize"
                min="10"
                max="50"
                value={props.rows}
                onChange={(e) => props.gridSize(parseInt(e.target.value, 10))}
            />
        </div>
    </div>
    )
}

export default Controls;