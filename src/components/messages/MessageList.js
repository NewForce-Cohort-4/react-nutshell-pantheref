import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./Message"
import { useHistory, useParams } from "react-router-dom"

export const MessageList = () => {
    //This state changes when " getMessages()" is invoked below
    const { messages, getMessages, addMessages, getUsers } = useContext(MessageContext)

    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true)

    const { messageId } = useParams()
    // const history = useHistory()

    // initial state of the messages holding an empty message
    const [message, setMessage] = useState({
        message:"",
        userId: "",
        id: ""
    })
    //useEffect is going to reach out and grab getMessages and pull the stored messages back
    useEffect(() => {
    console.log("MessageList: useEffect - getMessages")    
    getMessages()

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
            message: message.message 
        })
        }
    }



return (
    <>
    <h2>Messages</h2>
    <div className="message_window">
        {console.log("MessageList: Render", messages)}
        {
        messages.map(messages => {
                return <MessageCard key={messages.id} message={messages} />
            })
        }
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
    </div>
    </>
)
}