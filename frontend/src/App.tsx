import React from 'react'
import Home from './pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import { useGetCurrentUser } from './hooks/useGetCurrentUser'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import Admin from './pages/Admin'
import Partner from './pages/Partner'
const App = () => {
  useGetCurrentUser();
  const {user,loading} = useSelector((state:RootState)=>state.user)
  if(loading){
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-gray-900"></div>
      </div>
    )
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={ user?.role ==="admin"?(<Navigate  to="/admin" replace/>):<Home/>} />
        <Route path="/admin" element={ user?.role === "admin"?(<Admin />):<Navigate to="/" replace/>} />
        <Route path="/partner" element={ user?.role==="partner"?(<Partner />):user?.role==="admin"?(<Navigate to="/admin" replace/>): (<Navigate to="/" replace/>)} />
      </Routes>
    </div>
  )
}

export default App
