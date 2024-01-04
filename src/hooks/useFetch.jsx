import { useState, useEffect } from "react"


export function useFetch(url, options) {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setData(data.data))
  }, [])

  return { data }
}

