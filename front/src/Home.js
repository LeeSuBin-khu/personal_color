import React from 'react';
import './Home.css';

const Home = ( { history } ) => 
{
   
    return (
        <div className='home_display'>
            <center id='home'>
            findyourcolor
            </center>
            <div id="btn_group">
                <button id="soo_btn1" onClick={()=>{window.open('https://stackoverflow.com/questions/51057153/how-to-use-window-open-onclick-reactjs', "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")}}>image</button>
                <button id="soo_btn2" onClick={ () => {history.push("/test")}}>test</button>
            </div>
        </div>
    );
}

export default Home;