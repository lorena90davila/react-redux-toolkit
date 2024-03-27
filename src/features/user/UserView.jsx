import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"

export const UserView = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const { loading, error, users } = user

  useEffect(() => {
    dispatch(fetchUsers())
    // https://github.com/facebook/create-react-app/issues/6880#issuecomment-486636121
  }, [dispatch])

  return (
    <div>
      <h2>List of Users</h2>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error: {error}</div>}
      {!loading && users.length > 0 &&
        (<ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>)
      }
    </div>
  )
}
