import { Box, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"

const FactItem = ({ fact }) => {
  return (
    <Box p={4} bgcolor="lightblue">
      <Typography variant="h6">{fact.text}</Typography>
    </Box>
  )
}

const UseEffectFetchExample = () => {
  const [fact, setFact] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const res = await fetch(
          "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
        )
        const data = await res.json()
        setFact(data)
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }

    fetchFact()
  }, [])

  if (loading) {
    return <h2 className="text-2xl text-center font-bold mt-5">Loading...</h2>
  }
  return (
    <Box>
      Made with UseEffect
      <FactItem fact={fact} />
    </Box>
  )
}

export default UseEffectFetchExample
