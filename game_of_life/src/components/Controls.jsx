import React from 'react';
import Play from '../utils/playBtn.png';
import Fastforward from '../utils/fastBtn.png';
import Pause from '../utils/pauseBtn.png';
import '../styles/Controls.css';

const Controls = props => {
    
    return (
    <div className="controls">
        <div className="playback">
            <img onClick={props.pause} src={Pause} alt="Pause" />
            <img onClick={props.play} src={Play} alt="Play" />
            <img onClick={props.fastforward} src={Fastforward} alt="Fast Forward" />
        </div>

        <div className="button" onClick={props.clear}>Clear</div>

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