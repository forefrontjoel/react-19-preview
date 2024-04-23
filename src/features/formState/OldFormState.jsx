import { Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"

const OldFormState = () => {
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [emailsState, setEmailsState] = useState("")

  const submitEmail = (e) => {
    e.preventDefault()
    if (email !== confirmEmail) {
      setEmailsState({ status: "error", message: "Emails do not match" })
      return
    }
    // Submit email to server
    setEmailsState({ status: "succes", message: "Submitting!" })
  }

  return (
    <form>
      <Box
        p={4}
        bgcolor="lightblue"
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="confirmEmail">Confirm Email:</label>
        <input
          name="confirmEmail"
          onChange={(e) => setConfirmEmail(e.target.value)}
          value={confirmEmail}
        />
        <Typography color={emailsState?.status === "error" ? "red" : "green"}>
          {emailsState.message}
        </Typography>
        <Button type="submit" sx={{ mt: 2 }} onClick={submitEmail}>
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default OldFormState
