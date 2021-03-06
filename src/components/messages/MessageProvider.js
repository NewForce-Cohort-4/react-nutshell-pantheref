import React, { useState, createContext } from "react"

export const MessageContext = createContext()

export const MessageProvider = (props) => {
const [messages, setMessages] = useState([])
// getMessages will grab the messages from the api when they have been created
    const getMessages = () => {
    return fetch (`http://localhost:8088/messages?_expand=user`)
    .then(res => res.json())
    .then(setMessages)
    }

    // addMessges will allow the user to post messages to the API
    const addMessages = (messageObj) => {
      return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageObj),
      }).then((response) => response.json())
      .then(getMessages);
 }
 
 return (
     <MessageContext.Provider value={{
        messages, getMessages, addMessages
     }}>
         {props.children}
     </MessageContext.Provider>    
 )
}