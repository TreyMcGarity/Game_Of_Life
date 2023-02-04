import React from 'react';
import Play from '../utils/playBtn.png';
import Fastforward from '../utils/fastBtn.png';
import Pause from '../utils/pauseBtn.png';
import '../styles/Controls.css';

const Controls = props => {
    const makeGridSmall = () => {
        props.gridSize("small")
    }

    const makeGridRegular = () => {
        props.gridSize("regular")
    }

    const makeGridLarge = () => {
        props.gridSize("large")
    }
    
    return (
        <div className="controls">
            <div>
                <img
                    onClick={props.pause}
                    src={Pause}
                    alt='' 
                />
                <img
                    onClick={props.play}
                    src={Play} 
                    alt=''
                />
                <img
                    onClick={props.fastforward}
                    src={Fastforward} 
                    alt=''
                />
            </div>
            <div 
                className="button"
                onClick={props.clear}
            >Clear</div>
            <div className="button popout">Size
                <div className="menu">
                    <p onClick={makeGridSmall}>Small</p>
                    <p onClick={makeGridRegular}>Regular</p>
                    <p onClick={makeGridLarge}>Large</p>
                </div>
            </div>
        </div>
    )
}

export default Controls;