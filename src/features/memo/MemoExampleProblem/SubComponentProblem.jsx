import { Box } from "@mui/material"
import React from "react"

const SubComponent = ({ onClick }) => {
  console.log("I'm Rendering in the Subcomponent! 💩")

  return (
    <Box display={"flex"} flexDirection={"column"} p={2} bgcolor="lightpink">
      subComponent
      <button onClick={onClick}> +1 from Sub component</button>
    </Box>
  )
}

export default SubComponent
