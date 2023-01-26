import React from "react";
import iconTrent from "../img/trent.png";

export default function AuthorQuote(props) {
    return (
        <div className="aut">
            <h5>{props.author}</h5>
            <img className="trent" src={iconTrent} alt="seta icone" />
        </div>
    )
}