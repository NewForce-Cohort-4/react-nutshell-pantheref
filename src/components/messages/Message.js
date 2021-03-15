import React from "react"
// this function exports each individual message with all of the different values that will print to message window
export const MessageCard = ({message}) => {
// formatTime function will add the time stamp to show when each message was sent with date and time
      const formatTime = (timestamp) => {
        const adjustedDate = new Intl.DateTimeFormat("en", {
          dateStyle: "short",
          timeStyle: "medium"
        }).format(timestamp);
        return adjustedDate;
      };
    return (
    <p className="message">User:{message.user.name} Message:{message.message}
    {formatTime(message.timeStamp)}
    </p>

    )
}