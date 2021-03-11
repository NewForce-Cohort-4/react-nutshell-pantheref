import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./Message"
import { useHistory } from "react-router-dom"

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    useEffect(() => {
    console.log("MessageList: useEffect - getMessages")    
    getMessages()

},  [])

const history = useHistory()

return (
    <>
    <h2>Messages</h2>
    <div class="messages">
        {console.log("MessageList: Render", messages)}
        {
            messages.map(messages => {
                return <MessageCard key={messages.id} message={messages} />
            })
        }
    </div>
    </>
)
}