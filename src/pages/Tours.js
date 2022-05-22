import React, { useEffect, useState } from "react"
import Loading from "../components/Loading"
import Tour from "../components/Tour"

//const url = "https://course-api.com/react-tours-project"
const url = "https://628a38525da6ddfd5d61021f.mockapi.io/posts"
console.log(url)

function Tours() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      console.log(tours);
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <section>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={() => fetchTours()}>Получить записи</button>
        </div>
      </section>
    )
  }

  return (
    <section>
      {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}

    </section>
  )
}

export default Tours
