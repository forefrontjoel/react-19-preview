import React, { useState } from "react"
import { Box } from "@mui/material"
import SubComponent from "./SubComponentProblem"

const MemoExampleProblem = () => {
  const [count, setCount] = useState(0)
  const [subCount, setSubCount] = useState(0)

  const onClickFunction = () => {
    setCount(count + 1)
  }

  const subClickFunction = () => {
    setSubCount(subCount + 1)
  }

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      gap={2}
      bgcolor={"lightBlue"}
      p={4}
    >
      Memo Problem
      <br />
      Main Count: {count}
      <br />
      Sub Count: {subCount}
      <button onClick={onClickFunction}>+1 from Container</button>
      <SubComponent onClick={subClickFunction} />
    </Box>
  )
}

export default MemoExampleProblem
