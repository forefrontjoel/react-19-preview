import { Box, Typography } from "@mui/material"
import React, { useOptimistic, useState } from "react"

const deliverMessage = async (messageText) => {
  // Simulate a delay
  await new Promise((res) => setTimeout(res, 1000))
  return { text: messageText, sending: false }
}

const Messages = ({ messages, sendMessage }) => {
  const addOptimisticMessage = async (formData) => {
    addMessage({ text: formData.get("message"), sending: true })
    await sendMessage(formData.get("message"))
  }

  const [optimisticMessages, addMessage] = useOptimistic(
    messages,
    (currentState, optimisticMessage) => [...currentState, optimisticMessage]
  )

  return (
    <Box display="flex" flexDirection="column" p={3} bgcolor="lightskyblue">
      <Typography>Messages</Typography>
      {optimisticMessages.map((message, index) => (
        <Box bgcolor="lightgreen" key={index} mb={1}>
          <Typography>{message.text}</Typography>
          {message.sending ? "Sending..." : "Sent"}
        </Box>
      ))}
      <form action={addOptimisticMessage}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </Box>
  )
}

const UseOptimisticExample = () => {
  const [messages, setMessages] = useState([])

  const sendMessage = async (messageText) => {
    const newMessage = await deliverMessage(messageText)
    setMessages([...messages, newMessage])
  }

  return <Messages messages={messages} sendMessage={sendMessage} />
}

export default UseOptimisticExample
