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
            <div className="preset one"
                 onClick={props.randomSeed}
            >
                <img src={Question_Mark} alt="?" />
                Random
            </div>
            <div className="preset two"
                 onClick={props.oscillatorSeed}
            >
                <img src={Oscillator} alt=""/>
                Oscillator
            </div>
            <div className="preset three"
                 onClick={props.gliderSeed}
            >
                <img src={Glider} alt="" />
                Glider
            </div>
            <div className="preset four"
                 onClick={props.spaceShipSeed}
            >
                <img src={SpaceShip} alt="" />
                SpaceShip
            </div>
        </div>
    )
}

export default Presets;