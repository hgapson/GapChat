// import { useState } from 'react'
import './App.scss'
// import Login from './Pages/Login'
import Register from './Pages/Register'
import { AuthProvider } from './context/AuthContext'
// import Login from './Pages/Login'
// import Home from './Pages/Home'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// import Home from './Pages/Home'

function App() {
  return (
    <>
      <AuthProvider>
        <div>
          <Register />
        </div>
      </AuthProvider>
    </>
  )
}

export default App
