import React, { useContext , useState } from "react"
import { ArticleContext } from "./ArticleProvider";
import { useHistory } from "react-router-dom";
import "./Article.css"

export const ArticleForm = () => {

    const { addArticles } = useContext(ArticleContext)

    const history = useHistory()

    const [ article , setArticle ] = useState({
        userId: parseInt(localStorage.getItem("nutshell_user")),
        title: "",
        description: "",
        url: "",
        timestamp: Date.now()
    })


    // useEffect(() => {
    //     getArticles()
    // }, [])

    const handleArticleFormChange = (event) => {
        

        const newArticle = {...article}

        // const consoleObject = {
        //     id: event.target.id,
        //     value: event.target.value
        // }
        // console.log(consoleObject);
        

        newArticle[event.target.id] = event.target.value

        setArticle(newArticle)

    }

    const handleClickSaveArticle = (event) => {
        event.preventDefault()

        // console.log(article);
        
        addArticles(article)
        .then(() => {
            history.push("/articles")
        })
    };

    return (
        <>
            <div className="container-fluid">
                <div className="mt-2">
                    <h2 className="articleForm__title">New Article</h2>
                </div>
                <form action="" className="articleForm p-2">
                    <fieldset className="col-6">
                        <div className="form-group">
                            <label htmlFor="article_title" className="form-label">Article Title</label>
                            <input name="title" type="text" onChange={handleArticleFormChange} className="form-control" id="title" placeholder="Title" />
                        </div>
                    </fieldset>
                    <fieldset className="col-6">
                        <label htmlFor="article_url" className="form-label">Article URL</label>
                        <input name="article_url" type="url" onChange={handleArticleFormChange} className="form-control" id="url" placeholder="http://www.example.com"/>
                    </fieldset>
                    <fieldset className="col-6">
                        <label htmlFor="article_summary" className="form-label">Article Synopsis</label>
                        <textarea name="article_summary" onChange={handleArticleFormChange} className="form-control" id="description" cols="30" rows="4" placeholder="Brief summary..."></textarea>
                        <button className="btn btn-primary mt-4" onClick={handleClickSaveArticle}>Save Article</button>
                    </fieldset>
                </form>
                
            </div>
        </>
        
    )
    
};