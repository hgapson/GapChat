// import React, { useContext, useState, useEffect } from 'react'
// import { auth } from '../Firebase'
// import Register from '../Pages/Register'

// const AuthContext = React.createContext()

// export function useAuth() {
//   return useAuth(AuthContext)
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password)
//   }
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user)
//       setLoading(false)
//     })
//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     Register,
//   }
//   return (
//     <AuthContext.Provider value={!loading && value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

import React, { useContext, useState, useEffect, ReactNode } from 'react'
import { auth } from '../Firebase'

interface AuthProviderProps {
  children: ReactNode // Define the type for children prop
}

const AuthContext = React.createContext<unknown>(null) // Set initial context value

export function UseAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<unknown>(null) // Change type to match your user data structure
  const [loading, setLoading] = useState(true)

  function Signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: unknown) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    Signup,
  }

  return (
    <AuthContext.Provider value={!loading ? value : null}>
      {children}
    </AuthContext.Provider>
  )
}
