import React from "react"
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import History from "./components/History"
import Stats from "./components/Stats"
import CoffeeForm from "./components/CoffeeForm"
import { useAuth } from "./context/AuthContext"

function App() {
  const { globalUser, globalData, isLoading } = useAuth()
  const isAuthenticated = globalUser
  const isData = globalData && !!Object.keys(globalData || {}).length

  const authenticatedContent = (
    <>
      <Stats/>
      <History />
    </>
  )
  

  return (
      <Layout>
        <Hero />
        <CoffeeForm isAuthenticated={isAuthenticated}/>
        {(isAuthenticated && isLoading) && (
          <p>
            Loading data...
          </p>
        )}
        {(isAuthenticated && isData) && (authenticatedContent)}
      </Layout>
  )
}

export default App
