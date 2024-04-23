import React, { useState } from "react"

const OldForm = () => {
  const [name, setName] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("submit")
    console.log(name)
  }

  return (
    <div>
      <h1>Old Name Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default OldForm
