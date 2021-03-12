import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom";
import { ArticleContext } from "./ArticleProvider";
import "./Article.css"

// Create article html to print to DOM using 
// deconstructed article object passes in ArticleList 
export const ArticleCard = ({ article }) => {

    // Import deleteArticles from data provider
    const { deleteArticles } = useContext(ArticleContext)
    
    // Declare variable to call useHistory
    const history = useHistory()

    // Function passes selected article ID
    // as paramater and invokes API delete call
    const handleDelete = () => {
        
        deleteArticles(article.id)
        .then(() => {
            history.push("/articles")
        })
    };

    const formatTime = timestamp => {
        const adjustedDate = new Intl.DateTimeFormat('en', { dateStyle: 'short', timeStyle: 'medium' }).format(timestamp);
        // console.log(adjustedDate);
        return adjustedDate
    };
    
    return (
        <section className="col-md-6 col-sm-4">
            <div className="card m-2 article">
                <div className="card-body">
                    <h3 className="card-title article__title"><a href={article.url}>{article.title}</a></h3>
                    <div className="article__time"><b>Date created:</b> {formatTime(article.timestamp)}</div>
                    <div className="article__summary"><b>Synopsis:</b> {article.description}</div>
                    <div className="article__url"><b>url:</b> {article.url}</div>
                    <button className="btn btn-danger mt-1" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </section>
    )
};