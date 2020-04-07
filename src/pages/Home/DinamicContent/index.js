import React from 'react';
import './style.css';

// import { Container } from './styles';

export default function DinamicContent(props) {

    const style ={
        backgroundImage: `url(${props.background})`,
    };

    return (
        <div className="first-content" style={style}> 
            <h1><strong className="highligth-text">{props.highligth}</strong> {props.h1}</h1>
            <h4 className="sub-text">{props.h4}</h4>

            <button className="read-more-button">READ MORE</button>
            <div className="change-content">
                <button onClick={() => { props.setButton1() }} className={props.buttonActive[0]}></button>
                <button onClick={() => { props.setButton2() }} className={props.buttonActive[1]}></button>
                <button onClick={() => { props.setButton3() }} className={props.buttonActive[2]}></button>
            </div>
        </div>
    );
}
