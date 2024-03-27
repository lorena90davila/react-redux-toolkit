import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IceCreamView = () => {
  const [value, setValue] = useState(1)
  const numIceCreams = useSelector((state) => state.iceCream.numIceCreams)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of ice creams - {numIceCreams}</h2>
      <h3>Extra reducer </h3>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <br />
      <input
        type={'number'}
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
    </div>
  )
}
