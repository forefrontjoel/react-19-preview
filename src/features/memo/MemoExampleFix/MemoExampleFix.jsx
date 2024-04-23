import React, { useCallback, useState } from "react"
import { Box } from "@mui/material"
import SubComponentMemo from "./SubComponentMemo"

const MemoOld = () => {
  const [count, setCount] = useState(0)
  const [subCount, setSubCount] = useState(0)

  const onClickFunction = () => {
    setCount(count + 1)
  }

  const subClickFunction = useCallback(() => {
    setSubCount(subCount + 1)
  }, [subCount])

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
      <SubComponentMemo onClick={subClickFunction} />
    </Box>
  )
}

export default MemoOld
