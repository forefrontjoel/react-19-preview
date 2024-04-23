import { Box, Button, Typography } from "@mui/material"
import React from "react"

const RootPage = () => {
  return (
    <Box display="flex" flexDirection="column" width="300px" gap={3}>
      <Box
        bgcolor="lightskyblue"
        padding={3}
        borderRadius={1}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Typography variant="h6">Memo</Typography>
        <Button variant="contained" href={"/MemoExampleProblem"}>
          Memo Problem
        </Button>
        <Button variant="contained" href={"/MemoExampleFix"}>
          Memo Fix
        </Button>
      </Box>
      <Box
        bgcolor="lightskyblue"
        padding={3}
        borderRadius={1}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Typography variant="h6">Use</Typography>
        <Button variant="contained" href={"/UseEffectFetchExample"}>
          UseEffect Fetch Example
        </Button>
        <Button variant="contained" href={"/UseFetchExample"}>
          Use Fetch Example
        </Button>
      </Box>
      <Box
        bgcolor="lightskyblue"
        padding={3}
        borderRadius={1}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Typography variant="h6">Context</Typography>
        <Button variant="contained" href={"/OldUseContext"}>
          Old UseContext
        </Button>
        <Button variant="contained" href={"/NewUseContext"}>
          New Context
        </Button>
      </Box>
      <Box
        bgcolor="lightskyblue"
        padding={3}
        borderRadius={1}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Typography variant="h6">Form</Typography>
        <Button variant="contained" href={"/OldForm"}>
          Old Form
        </Button>
        <Button variant="contained" href={"/NewForm"}>
          New Form
        </Button>
      </Box>
      <Box
        bgcolor="lightskyblue"
        padding={3}
        borderRadius={1}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Typography variant="h6">Form status</Typography>
        <Button variant="contained" href={"/OldFormStatus"}>
          Old FormStatus
        </Button>
        <Button variant="contained" href={"/NewFormStatus"}>
          New FormStatus
        </Button>
      </Box>
      <Box
        bgcolor="lightskyblue"
        padding={3}
        borderRadius={1}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Typography variant="h6">Form state</Typography>
        <Button variant="contained" href={"/OldFormState"}>
          Old FormState
        </Button>
        <Button variant="contained" href={"/NewFormState"}>
          New FormState
        </Button>
      </Box>
      <Box
        bgcolor="lightskyblue"
        padding={3}
        borderRadius={1}
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Typography variant="h6">useOptimistic</Typography>
        <Button variant="contained" href={"/UseOptimisticExample"}>
          useOptimistic Example
        </Button>
      </Box>
    </Box>
  )
}

export default RootPage
