import { Box, Button, Typography } from "@mui/material"
import React, { use } from "react"
import { ThemeContext, ThemeProvider } from "./ThemeContext"

const NewUseContext = () => {
  return (
    <ThemeProvider>
      <ColorBlock />
    </ThemeProvider>
  )
}

const ColorBlock = () => {
  const { theme, toggleTheme } = use(ThemeContext)
  return (
    <div>
      New Context
      <Box bgcolor={theme === "light" ? "black" : "white"} p={5}>
        <Typography color={theme === "light" ? "white" : "black"}>
          NewUseContext
        </Typography>
        <Button onClick={toggleTheme}>Change theme</Button>
      </Box>
    </div>
  )
}

export default NewUseContext
