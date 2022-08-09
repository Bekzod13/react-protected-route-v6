import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    let auth = {"token": false};
  return (
    auth.token ? 
    <Outlet />:
    <Navigate to='/login'/>
  )
}

export default ProtectedRoute
