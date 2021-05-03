import React from "react"
import { Link } from "react-router-dom"
function SingleBeer({  passedBeer}) {
  if(!passedBeer.name){
    return null;
  }

  return (
    <>
    <span>PRICE : {passedBeer.price} </span>
    <span>NAME : {passedBeer.name}</span><br/>
    <br/>
    <br/>
    
    </>
  )
}

export default SingleBeer
