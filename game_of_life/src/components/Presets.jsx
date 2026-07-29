import React from 'react';
import Question_Mark from '../utils/question_mark.png';
import Oscillator from '../utils/preset2.png';
import Glider from '../utils/preset3.png';
import SpaceShip from '../utils/preset4.png';
import '../styles/Presets.css';

const Presets = props => {
    return (
        <div className="presets">
            <h3>Presets</h3>
            <button className="preset one" onClick={props.randomSeed} type="button">
                <img src={Question_Mark} alt="Random" />
                <span>Random Seed</span>
            </button>
            <button className="preset two" onClick={props.oscillatorSeed} type="button">
                <img src={Oscillator} alt="Oscillator"/>
                <span>Oscillator</span>
            </button>
            <button className="preset three" onClick={props.gliderSeed} type="button">
                <img src={Glider} alt="Glider" />
                <span>Glider</span>
            </button>
            <button className="preset four" onClick={props.spaceShipSeed} type="button">
                <img src={SpaceShip} alt="Spaceship" />
                <span>Spaceship</span>
            </button>
        </div>
    )
}

export default Presets;