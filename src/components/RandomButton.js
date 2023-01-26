import React from "react";
import updateIcon from "../img/updateIcon.png"
import {  useDispatch } from "react-redux";
import { increment } from "../features/counter/counterSlice";

export default function RandomButton(){
    const dispatch = useDispatch();
    return (
        <button className="btn-random" onClick={()=>{  
          dispatch(increment(numberRandom()));
          display('text');
        }}>
            <p>random</p>
            <img className="iconUpdate" src={updateIcon} alt="icon of update"/>
        </button>
    )
}

function numberRandom(){
    return Math.floor(Math.random()*1643);
}
function display(value){
    const allText = document.querySelector('div.all-text');
    const authorQuote = document.querySelector('div.main');
    const nameAuthor = document.querySelector('h5.nameAuthor');
    switch(value){
        case 'text': authorQuote.style.display ='block';allText.style.display = 'none'; nameAuthor.style.display = 'none'; break;
        case 'texts': authorQuote.style.display ='none';allText.style.display = 'block'; nameAuthor.style.display = 'block'; break;
    }    
}
export { display}