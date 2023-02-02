
import React, { useState } from "react"
import Header from "../components/Header"

function Home() {
  const [data, setData] = useState(null)

  const handleDataFromParent  = (data) => {
    console.log('data', data)
    setData(data)
  }
  const handleErrorFromParent = (error) => {
    console.log('error', error)
  }
  const handleLoadingFromParent = (isLoading) => {
    console.log('isLoading', isLoading)
  }

  return (
    <main className="absolute top-0 right-0 bottom-0 left-0 h-full w-[655px] m-auto">
      <Header onData={handleDataFromParent } onError={handleErrorFromParent} onLoading={handleLoadingFromParent} />
      <div className="m-auto w-fit">
        {/* { data && <Summary />} */}
      </div>
    </main>
  )
}

export default Home