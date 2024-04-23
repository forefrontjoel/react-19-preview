import { Box } from "@mui/material"
import React, { memo } from "react"

const SubComponentMemo = ({ onClick }) => {
  console.log("I'm Rendering in the Subcomponent! 💩")

  return (
    <Box display={"flex"} flexDirection={"column"} p={2} bgcolor="lightpink">
      subComponent
      <button onClick={onClick}> +1 from Sub component</button>
    </Box>
  )
}

export default memo(SubComponentMemo)
