
import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import Summary from "../components/Summary"

function Home() {
  const [data, setData] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    isLoading && setData(false)
    error && setData(false)
  }, [isLoading, error])
  
  const handleDataFromParent = (data) => {
    console.log('data', data)
    setData(data)
  }
  const handleErrorFromParent = (error) => {
    setError(error)
    setTimeout(() => {
      setError(false)
    }, 3000)
  }
  const handleLoadingFromParent = (isLoading) => {
    // console.log('isLoading', isLoading)
    setIsLoading(isLoading)
  }

  return (
    <main className="absolute top-0 right-0 bottom-0 left-0 h-full w-[655px] m-auto max-lg:w-[90%]">
      <Header onData={handleDataFromParent} onError={handleErrorFromParent} onLoading={handleLoadingFromParent} />
      <div className="m-auto w-full">
      { data || isLoading || error ? (
        <Summary data={data} isLoading={isLoading} error={error} />
        ) : null }
      </div>
    </main>
  )
}

export default Home