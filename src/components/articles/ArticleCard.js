import React from "react"
import { Link } from "react-router-dom";
import "./Article.css"

export const ArticleCard = ({ article }) => {
    return (
        <section className="col-md-6 col-sm-4">
            <div className="card m-2 article">
                <div className="card-body">
                    <h3 className="card-title article__title"><a href={article.url}>{article.title}</a></h3>
                    <div className="article__summary"><b>Synopsis:</b> {article.description}</div>
                    <div className="article__url"><b>url:</b> {article.url}</div>
                </div>
            </div>
        </section>
    )
};