import React, { useState, useEffect } from "react"
import SingleBeer from './SingleBeer'
function Beers() {
  const [beers, setBeers] = useState(null)
  useEffect(() => {
    fetch(`https://beers-api-bc.web.app/beers`)
    .then((response) => response.json())
    .then((data) => setBeers(data))
    .catch((error) => console.log(error))
  }, [])
  return(
    <>
    <h2>Api Beers</h2>
    <button onClick = {(beers) => {

    }} >GET RANDOM BEERS</button>
    <br/>
    <br/>
    {!beers ? <p>Loading......</p> : beers.map(beer => {
      return <SingleBeer key={beer.id}  passedBeer={beer}/>
    })}

    </>
  )
}
export default Beers
