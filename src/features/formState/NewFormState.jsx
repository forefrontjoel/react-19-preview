import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { useFormState } from "react-dom"

const checkEmail = (previousState, formData) => {
  if (formData?.get("email") !== formData?.get("confirmEmail")) {
    return { status: "error", message: "Emails do not match" }
  }
  // Submit email to server
  return { status: "succes", message: "Submitting!" }
}

const NewFormState = () => {
  const [emailsState, formAction] = useFormState(checkEmail, {})
  return (
    <form action={formAction}>
      <Box
        p={4}
        bgcolor="lightblue"
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" />
        <label htmlFor="confirmEmail">Confirm Email:</label>
        <input name="confirmEmail" />
        <Typography color={emailsState?.status === "error" ? "red" : "green"}>
          {emailsState.message}
        </Typography>
        <Button type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default NewFormState
