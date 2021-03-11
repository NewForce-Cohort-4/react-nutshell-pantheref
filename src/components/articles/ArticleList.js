import React, { useContext , useState , useEffect } from "react"
import { useHistory } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { ArticleContext } from "./ArticleProvider";

export const ArticleList = () => {
    const { articles, getArticles, deleteArticles } = useContext(ArticleContext)
    
    const [ filteredArticles, setFiltered ] = useState([])
    
    const history = useHistory()

    useEffect(() => {
        getArticles()
    }, [])
    
    useEffect(() => {
        const sortArticles = articles.sort((a, b) => b.timestamp - a.timestamp)

        setFiltered(sortArticles)
    }, [articles])



    return (
        <>
            <div className="container-fluid">
                <div className="my-2">
                    <h2>News</h2>
                    <button className="btn btn-secondary" onClick={() => {history.push("articles/new")}}>New Article</button>
                </div>
                <div className="articles row">
                    {
                        filteredArticles.map(article => {
                            return <ArticleCard key={article.id} article={article} />
                        })
                    }
                </div>
            </div>
        </>
    )
};