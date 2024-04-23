import React from "react"
import { RootPage } from "./features"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Box } from "@mui/material"
import { MemoExampleFix, MemoExampleProblem } from "./features/memo"
import { UseEffectFetchExample, UseFetchExample } from "./features/useFetch"
import { NewUseContext, OldUseContext } from "./features/useContext"
import { OldForm, NewForm } from "./features/action"
import { OldFormStatus, NewFormStatus } from "./features/formStatus"
import { NewFormState, OldFormState } from "./features/formState"
import { UseOptimisticExample } from "./features/optimistic"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/MemoExampleProblem",
    element: <MemoExampleProblem />,
  },
  {
    path: "/MemoExampleFix",
    element: <MemoExampleFix />,
  },
  {
    path: "/UseEffectFetchExample",
    element: <UseEffectFetchExample />,
  },
  {
    path: "/UseFetchExample",
    element: <UseFetchExample />,
  },
  {
    path: "/OldUseContext",
    element: <OldUseContext />,
  },
  {
    path: "/NewUseContext",
    element: <NewUseContext />,
  },
  {
    path: "/OldForm",
    element: <OldForm />,
  },
  {
    path: "/NewForm",
    element: <NewForm />,
  },
  {
    path: "/OldFormStatus",
    element: <OldFormStatus />,
  },
  {
    path: "/NewFormStatus",
    element: <NewFormStatus />,
  },
  {
    path: "/OldFormState",
    element: <OldFormState />,
  },
  {
    path: "/NewFormState",
    element: <NewFormState />,
  },
  {
    path: "/UseOptimisticExample",
    element: <UseOptimisticExample />,
  },
])

const App = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <RouterProvider router={router} />
    </Box>
  )
}

export default App
