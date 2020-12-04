import React from 'react';
import './spring.css?ver=1.3';
import spring from './season/spring.jpg';

const Spring = ( { history } ) => 
{
    return (
        <div className='spring'>
            <img src = {spring} alt = "spring"/>
            <div id="btn_back">
            <button id="back_btn" onClick={ () => {history.push("/")}}>back</button>
            </div>
        </div>
    );
}

export default Spring;