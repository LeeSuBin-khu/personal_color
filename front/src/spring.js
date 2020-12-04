import React from 'react';
import './spring.css?ver=1.3';

const Spring = ( { history } ) => 
{
    return (
            <div id="btn_back">
                <button id="back_btn" onClick={ () => {history.push("/")}}>back</button>
            </div>
    );
}

export default Spring;