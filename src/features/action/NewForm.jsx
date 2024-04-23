import React, { useState } from "react"

const NewForm = () => {
  const handleSubmit = async (formData) => {
    console.log(formData.get("name"))
  }

  return (
    <div>
      <h1>New Name Form</h1>
      <form action={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewForm
