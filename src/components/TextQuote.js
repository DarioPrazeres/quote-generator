import React from "react";
export default function TextQuote(props) {
    return (
        <div className="textQuote">
            <div className="border"></div>
            <h2 className="text" >{props.text}</h2>
        </div>
    )
}