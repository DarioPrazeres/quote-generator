import React from "react";
import useFetch from "./useFecth";
import { useEffect } from "react";
import TextQuote from "./TextQuote";
import AuthorQuote from "./AuthorQuote";
import { useContext, useState } from "react";
import { ContContext } from "../App";
import { display } from "./RandomButton";
export default function Quote() {
    const {cont} = useContext(ContContext);
    const [author, setAuthor] = useState('');
    const [data] = useFetch('https://api.api-ninjas.com/v2/quotes?category=love');
    useEffect(() => {
        nameAuthor();
    }, [author])
    function nameAuthor() {
        data && data.map((e, i) => {
            if (i === cont) {
                setAuthor((a)=> a=e.author);
            }
        })
    }
    return (
        <section>
            {
                data && data.map((e, i) => {
                    if (i === cont) {
                        return (
                            <div key={i} className="main">
                                <TextQuote text={e.quote} />
                                <div className="authorQuote" onClick={() => {
                                    nameAuthor();
                                    display('texts')
                                }}>
                                    <AuthorQuote author={e.author ? e.author : 'UNKNOWN'} />
                                </div>
                            </div>
                        )
                    }
                })
            }
            <h5 className="nameAuthor">{author}</h5>
            <div className="all-text">
                {
                    data && data.map((e, i) => {
                        if (e.author === author) {
                            return (
                                <TextQuote key={i} text={e.text} />
                            )
                        }
                    })
                }
            </div>
        </section>
    )
}

