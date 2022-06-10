import { useEffect, useState } from "react"

//custom hook de solicitud a la API => solo solicitudes en GET (JSON)
export const useFetch = (url) => {
  
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(()=> {

    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then ((data) => setData(data))
      .catch((e) => setError('Server Error'))
      .finally(() => setLoading(false))

  }, [url])
  
  return {data, error, loading}
}
