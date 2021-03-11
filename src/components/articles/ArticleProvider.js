import React, { useState, createContext } from "react"

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])

    const activeUserId = localStorage.getItem("nutshell_user")

    const getArticles = () => {
        return fetch(`http://localhost:8088/articles?userId=${activeUserId}`)
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

    const deleteArticles = ArticleId => {
        return fetch(`http://localhost:8088/articles/${ArticleId}`, {
            method: "DELETE"
        })
        .then(getArticles)
    }

    return (
        <ArticleContext.Provider value={{
            articles, getArticles, addArticles, deleteArticles
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
};