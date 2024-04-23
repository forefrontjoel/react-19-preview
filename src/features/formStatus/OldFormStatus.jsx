import { Box } from "@mui/material"
import React, { useState } from "react"

const SubmitButton = ({ loading, name }) => {
  return (
    <div>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      <br />
      {loading && "Submitting data: " + name}
    </div>
  )
}

const OldFormState = () => {
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    //Fake Fetch
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <Box bgcolor="lightblue" p={4} borderRadius={2}>
      <h1>Old Name FormStatus</h1>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={1}>
          <label>
            Name:{" "}
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <SubmitButton loading={loading} name={name} />
        </Box>
      </form>
    </Box>
  )
}

export default OldFormState
