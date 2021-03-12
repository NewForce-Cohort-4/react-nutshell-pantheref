import React, { useContext , useState , useEffect } from "react"
import { useHistory } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { ArticleContext } from "./ArticleProvider";

export const ArticleList = () => {
    // Import articles and getArticles from data provider
    const { articles, getArticles } = useContext(ArticleContext)
    
    // Declare variable and function to stored array...
    // of articles filtered by most recent timestamp.
    const [ filteredArticles, setFiltered ] = useState([])
    
    // Declare variable to call useHistory
    const history = useHistory()

    // Initiate API fetch call to get articles on page load.
    // Store returned data in articles variable
    useEffect(() => {
        getArticles()
    }, [])
    
    // When getArticles is modified, intitate sort function
    // store returned array in filteredArticles
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


    let returnSpan = ""

    return (
        <>
            <div className="container-fluid">
                <div className="my-2">
                    <h2>News</h2>
                    <button className="btn btn-secondary" onClick={() => {history.push("articles/new")}}>New Article</button>
                </div>
                <div className="articles row">
                    {/* Conditional checks if filteredArticles is empty and prints message to DOM */}
                    { filteredArticles.length === 0 &&
                        <div className="container-sm noarticle--span d-flex align-items-center justify-content-center">No saved articles</div>
                    } 
                    {/* else, display sorted articles */}
                    {filteredArticles.map(article => {
                            return <ArticleCard key={article.id} article={article} />
                        })
                    }               
                </div>
            </div>
        </>
    )
};