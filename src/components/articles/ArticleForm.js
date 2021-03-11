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
            <form action="" className="articleForm"></form>
            <h2 className="articleForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="article_title">Article Title</label>
                    <input name="title" type="text" onChange={handleArticleFormChange} className="form-control" id="title" placeholder="Title" />
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="article_summary">Article Synopsis</label>
                <textarea name="article_summary" onChange={handleArticleFormChange} id="description" cols="30" rows="4"></textarea>
            </fieldset>
            <fieldset>
                <label htmlFor="article_url">Article URL</label>
                <input name="article_url" type="url" onChange={handleArticleFormChange} id="url"/>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveArticle}>Save Article</button>
            
        </>
        
    )
    
};