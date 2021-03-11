import React from "react"
import { Link } from "react-router-dom";
import "./Article.css"

export const ArticleCard = ({ article }) => {
    return (
        <section className="article">
            <h3 className="article__title">{article.title}</h3>
            <div className="article__summary">{article.summary}</div>
            <div className="article__url">{article.url}</div>
        </section>   
    )
};