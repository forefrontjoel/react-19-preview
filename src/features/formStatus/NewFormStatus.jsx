import { Box } from "@mui/material"
import React from "react"
import { useFormStatus } from "react-dom"

const SubmitButton = () => {
  const { pending, data } = useFormStatus()
  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
      <br />
      {pending && "Submitting data: " + data?.get("name")}
    </div>
  )
}

const NewFormState = () => {
  const handleSubmit = async () => {
    return new Promise((resolve) => {
      //Fake Fetch
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  return (
    <Box bgcolor="lightblue" p={4} borderRadius={2}>
      <h1>New Name FormStatus</h1>
      <form action={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={1}>
          <label>
            Name: <input name="name" type="text" />
          </label>
          <SubmitButton />
        </Box>
      </form>
    </Box>
  )
}

export default NewFormState
