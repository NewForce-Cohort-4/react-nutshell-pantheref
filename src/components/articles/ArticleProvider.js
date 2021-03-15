

import React, { useState, createContext } from "react"

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
    // Declare articles as an empty array,
    // and function to update articles in state
    const [articles, setArticles] = useState([])

    // Get currently logged in user's ID and store in variable
    const activeUserId = localStorage.getItem("nutshell_user")

    // Get articles from database that were created by the active user
    const getArticles = () => {
        return fetch(`http://localhost:8088/articles?userId=${activeUserId}`)
        .then(r => r.json())
        .then(setArticles)
    };

    // API call to post new articles to database
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

    // API call to delete selected article by ID
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