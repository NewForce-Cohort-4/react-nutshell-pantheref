import React, { useContext , useState, createContext } from "react"
import { ArticleContext } from "./ArticleProvider";
import { useHistory } from "react-router-dom";
import "./Article.css"

export const FormContext = createContext()

export const ArticleForm = (props) => {
    // Import addArticles from data provider
    const { addArticles } = useContext(ArticleContext)

    // Declare variable to call useHistory
    const history = useHistory()

    // Declare article object and function stored in state
    const [ article , setArticle ] = useState({
        userId: parseInt(localStorage.getItem("nutshell_user")),
        title: "",
        description: "",
        url: "",
        pendingEdit: 0
    })


    // Function is called on change of selected form value
    // which matches the article key stored in state
    // Form value is then written to state
    const handleArticleFormChange = (event) => {

        const newArticle = {...article}

        newArticle[event.target.id] = event.target.value

        setArticle(newArticle)

    }

    // Function is called on form submit
    // and passes the article object from state
    // to addArticles function and sends the object
    // to the database.

    const handleClickSaveArticle = (event) => {
        
        // const eObject = {
        //     event: event,
        //     target: event.target,
        //     iD: event.id,
        //     eventValue: event.value,
        //     targetValue: event.target.value,
        //     target1: event.target[1],
        //     titleValue: event.target[1].value
        // }
        // console.log(eObject);
        
        event.preventDefault()

            article.timestamp = Date.now()
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
                <form onSubmit={handleClickSaveArticle} className="articleForm p-2">
                    <fieldset className="col-6">
                        <div className="form-group">
                            <label htmlFor="article_title" className="form-label">Article Title</label>
                            <input name="title" type="text" onChange={handleArticleFormChange} className="form-control" id="title" placeholder="Title" required autoFocus/>
                        </div>
                    </fieldset>
                    <fieldset className="col-6">
                        <label htmlFor="article_url" className="form-label">Article URL</label>
                        <input name="article_url" type="url" onChange={handleArticleFormChange} className="form-control" id="url" placeholder="http://www.example.com" required/>
                    </fieldset>
                    <fieldset className="col-6">
                        <label htmlFor="article_summary" className="form-label">Article Synopsis</label>
                        <textarea name="article_summary" onChange={handleArticleFormChange} className="form-control" id="description" cols="30" rows="4" placeholder="Brief summary..." required></textarea>
                        <button type="submit "className="btn btn-primary mt-4">Save Article</button>
                    </fieldset>
                </form>
                
            </div>
            <FormContext.Provider value={{
                article, setArticle
            }}>
                {props.children}
            </FormContext.Provider>
        </>
        
    )
    
};