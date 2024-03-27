// import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const numCakes = useSelector((state) => state.cake.numCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes - {numCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cakes</button>
      <br />
      <button onClick={() => dispatch(restocked(3))}>Restock cakes</button>
    </div>
  )
}
