import React, { useState, useContext } from "react"
import { Link, useHistory } from "react-router-dom";
import { ArticleContext } from "./ArticleProvider";
import { FormContext } from "./ArticleForm"
import "./Article.css"


// export const ArticleEdit = ({ singleEdit }) => {
//     const { updateArticle } = useContext(ArticleContext)
//     const { setArticle } = useContext(FormContext)
//     // const { editedArticle , setArticleEdit } = useContext(ArticleCard)

//     const history = useHistory()    
    
//     const handleUpdate = () => {
//         updateArticle(singleEdit.id)
//         .then(() => {
//             history.push("/articles")
//             setArticle({pendingEdit: 0})
//         })
//     };



//     return (
//         <>
//             <fieldset>
//                 <h3 className="card-title article__title"><a href={singleEdit.url}>{singleEdit.title}</a></h3>
//                 <input name="title" type="text" className="form-control" defaultValue={singleEdit.title} required autoFocus/>    
//                 <div className="article__summary"><b>Synopsis:</b> <input name="summary" type="text" className="form-control" defaultValue={singleEdit.description} required /></div>
//                 <div className="article__url"><b>url:</b> <input name="url" type="url" className="form-control" defaultValue={singleEdit.url} required /></div>
//                 <button className="btn btn-warning text-light mt-1" onClick={handleUpdate}>Save Changes</button>                                
//             </fieldset>
//         </>
//     )

// };

// Create article html to print to DOM using 
// deconstructed article object passes in ArticleList 

export const ArticleCard = ({ singleArticle }) => {

    console.log(singleArticle);
    
    // Import deleteArticles from data provider
    const { deleteArticles } = useContext(ArticleContext)
    
    // Declare variable to call useHistory
    const history = useHistory()

    // Function passes selected article ID
    // as paramater and invokes API delete call
    const handleDelete = () => {
        
        deleteArticles(singleArticle.id)
        .then(() => {
            history.push("/articles")
        })
    };

    const { setArticle } = useContext(FormContext)
    // const [ editedArticle , setArticleEdit ] = useState({})

    const handleArticleEdit = () => {
        console.log(singleArticle);
        
        setArticle({
            title: singleArticle.title,
            description: singleArticle.description,
            url: singleArticle.url,
            pendingEdit: singleArticle.id
        })
        
      };

    const formatTime = timestamp => {
        const adjustedDate = new Intl.DateTimeFormat('en', { dateStyle: 'short', timeStyle: 'medium' }).format(timestamp);
        // console.log(adjustedDate);
        return adjustedDate
    };
    
    return (
        <>
        <section className="col-md-6 col-sm-4">
            <div className="card m-2 article">
                <div className="card-body">
                    <h3 className="card-title article__title"><a href={singleArticle.url}>{singleArticle.title}</a></h3>
                    <div className="article__time"><b>Date created:</b> {formatTime(singleArticle.timestamp)}</div>
                    <div className="article__summary"><b>Synopsis:</b> {singleArticle.description}</div>
                    <div className="article__url"><b>url:</b> {singleArticle.url}</div>
                    <button className="btn btn-warning text-light my-1 mx-1" onClick={handleArticleEdit}>Edit</button>
                    <button className="btn btn-danger my-1 " onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </section>
        </>
    )
};