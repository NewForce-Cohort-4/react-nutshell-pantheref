import React, { useContext , useState , useEffect } from "react"
import { useHistory } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { ArticleContext } from "./ArticleProvider";

export const ArticleList = () => {
    const { articles, getArticles } = useContext(ArticleContext)
    
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
            <h2>Articles</h2>
            <button className="btn btn-secondary" onClick={() => {history.push("articles/new")}}>New Article</button>

            <div className="articles">
                {
                    filteredArticles.map(article => {
                        return <ArticleCard key={article.id} article={article} />
                    })
                }
            </div>
        </>
    )
};