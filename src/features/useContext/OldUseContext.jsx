import { Box, Button, Typography } from "@mui/material"
import React, { useContext } from "react"
import { ThemeContext, ThemeProvider } from "./ThemeContext"

const OldUseContext = () => {
  return (
    <ThemeProvider>
      <ColorBlock />
    </ThemeProvider>
  )
}

const ColorBlock = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      Old Context
      <Box bgcolor={theme === "light" ? "black" : "white"} p={5}>
        <Typography color={theme === "light" ? "white" : "black"}>
          OldUseContext
        </Typography>
        <Button onClick={toggleTheme}>Change theme</Button>
      </Box>
    </div>
  )
}

export default OldUseContext
