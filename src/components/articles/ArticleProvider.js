import React, { useState, createContext } from "react"

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/articles")
        .then(r => r.json())
        .then(setArticles)
    };

    const addArticles = article => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article)
        })
        .then(getArticles)
    }

    return (
        <ArticleContext.Provider value={{
            articles, getArticles, addArticles
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
};