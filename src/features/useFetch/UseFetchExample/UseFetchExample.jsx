import { Box, Typography } from "@mui/material"
import { use, Suspense } from "react"

const fetchData = async () => {
  const res = await fetch(
    "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
  )
  return res.json()
}

const Fact = () => {
  const fact = use(fetchData())
  return (
    <Box p={3} bgcolor="lightpink">
      <Typography variant="h6">{fact.text}</Typography>
    </Box>
  )
}

const UseFetchExample = () => {
  return (
    <Suspense
      fallback={
        <h2 className="text-2xl text-center font-bold mt-5">Loading...</h2>
      }
    >
      <Box>
        Made with Use
        <Fact />
      </Box>
    </Suspense>
  )
}
export default UseFetchExample
