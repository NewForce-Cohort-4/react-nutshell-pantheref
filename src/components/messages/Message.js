import React from "react"

export const MessageCard = ({message}) => {
    console.log(message)

      const formatTime = (timestamp) => {
        const adjustedDate = new Intl.DateTimeFormat("en", {
          dateStyle: "short",
          timeStyle: "medium",
        }).format(timestamp);
        // console.log(adjustedDate);
        return adjustedDate;
      };
    return (
    <p className="message">User:{message.user.name} Message:{message.message}
    {formatTime(message.timeStamp)}
    </p>

    )
}