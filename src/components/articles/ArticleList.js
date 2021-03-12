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

    // const articlePrinter = () => {
    //     let articleSpan = ""
    //     if (filteredArticles.length < 0) {
    //         debugger
    //         return <div className="container-sm">No saved articles</div>
    //     } else {
    //         filteredArticles.map(article => {
    //             debugger
    //             articleSpan += <ArticleCard key={article.id} article={article} />
    //         })
    //         return articleSpan
    //     }
    // }; 

    return (
        <>
            <div className="container-fluid">
                <div className="my-2">
                    <h2>News</h2>
                    <button className="btn btn-secondary" onClick={() => {history.push("articles/new")}}>New Article</button>
                </div>
                <div className="articles row">
                    { filteredArticles.length === 0 &&
                        <div className="container-sm noarticle--span d-flex align-items-center justify-content-center">No saved articles</div>
                    } 
                    
                    {filteredArticles.map(article => {
                            return <ArticleCard key={article.id} article={article} />
                        })
                    }               
                </div>
            </div>
        </>
    )
};