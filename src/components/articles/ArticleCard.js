import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom";
import { ArticleContext } from "./ArticleProvider";
import "./Article.css"



export const ArticleCard = ({ article }) => {

    const { deleteArticles } = useContext(ArticleContext)
    const history = useHistory()

    const handleDelete = () => {
        
        deleteArticles(article.id)
        .then(() => {
            history.push("/articles")
        })
    };
    
    return (
        <section className="col-md-6 col-sm-4">
            <div className="card m-2 article">
                <div className="card-body">
                    <h3 className="card-title article__title"><a href={article.url}>{article.title}</a></h3>
                    <div className="article__summary"><b>Synopsis:</b> {article.description}</div>
                    <div className="article__url"><b>url:</b> {article.url}</div>
                    <button className="btn btn-danger mt-1" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </section>
    )
};