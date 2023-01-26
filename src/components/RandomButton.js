import React from "react";
import updateIcon from "../img/updateIcon.png"
import { useContext } from "react";
import { ContContext } from "../App";

export default function RandomButton(){
    const {cont, setCont} = useContext(ContContext);
    return (
        <button className="btn-random" onClick={()=>{  
          setCont((c)=> c = numberRandom())
          //display('text');
        }}>
            <p>random {cont}</p>
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