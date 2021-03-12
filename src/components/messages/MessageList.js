import React, { useContext, useEffect, useState, useRef } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./Message"
import { useHistory, useParams } from "react-router-dom"
import "./message.css"

export const MessageList = () => {
    //This state changes when " getMessages()" is invoked below
    const { messages, getMessages, addMessages } = useContext(MessageContext)

    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true)

    const { messageId } = useParams()
    // const history = useHistory()

    const fieldRef = useRef(null)  


    // initial state of the messages holding an empty message
    const [message, setMessage] = useState({
        message:"",
        userId: "",
        id: "",
        timeStamp: Date.now()
    })

    

    //useEffect is going to reach out and grab getMessages and pull the stored messages back
    useEffect(() => {
    console.log("MessageList: useEffect - getMessages")    
    getMessages()
    fieldRef.current.scrollIntoView()
    },  [])

const handleControlledInputChange = (event) => {
    //creating a copy of the state object and then set it to state
    const newMessage = { ...message }
    //set the property to the new value with bracket notation
    newMessage[event.target.id] = event.target.value
    //update state
    setMessage(newMessage)
}

const handleClickSaveMessage = () => {
    if(parseInt(message.id) === 0) {
        window.alert("Please enter a message")
    } else {
        addMessages ({
            message: message.message,
            userId: localStorage.getItem("nutshell_user")
        }).then(() => {
          fieldRef.current.scrollIntoView()
        })
        }
    }

// let messageBody = ""

return (
  <>
    <h2>Messages</h2>
    <div className="container-fluid">
      <div className="message_window">
        {console.log("MessageList: Render", messages)}
        {
          messages.map((messages) => {
            return <MessageCard key={messages.id} message={messages} />;
          })
          // {messageBody.scrollTop=1000}
        }
        <div className="test" ref={fieldRef}></div>
      </div>

      <fieldset>
        <div className="message_form">
          <input
            type="text"
            id="message"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="type a message"
            value={message.message}
          />
        </div>
      </fieldset>
    </div>
    <button
      className="btn btn-primary"
      // disabled={isLoading}
      onClick={(event) => {
        event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
        handleClickSaveMessage();
      }}
    >
      Send Message
    </button>
  </>
);
}