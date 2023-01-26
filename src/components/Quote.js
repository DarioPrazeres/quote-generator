import React from "react";
import useFetch from "./useFecth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthor } from "../features/counter/author";
import { display } from "./RandomButton";
import TextQuote from "./TextQuote";
import AuthorQuote from "./AuthorQuote";

export default function Quote() {
    const dispatch = useDispatch();
    const num = useSelector((state) => state.counter.value);
    const author = useSelector((state) => state.author.value);
    const [data] = useFetch('https://type.fit/api/quotes');
    useEffect(() => {
        nameAuthor();
    }, [author])
    function nameAuthor() {
        data && data.map((e, i) => {
            if (i === num) {
                console.log(e.author)
                dispatch(updateAuthor(e.author))
            }
        })
    }
    return (
        <section>
            {
                data && data.map((e, i) => {
                    if (i === num) {
                        return (
                            <div key={i} className="main">
                                <TextQuote text={e.text} />
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

