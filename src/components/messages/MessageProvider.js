import React, { useState, createContext } from "react"

export const MessageContext = createContext()

export const MessageProvider = (props) => {
const [messages, setMessages] = useState([])

    return fetch ("http://localhost:8088/messages")
    .then(res => res.json())
    .then(setMessages)
}

