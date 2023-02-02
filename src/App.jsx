import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Background from "./components/Background"

import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <main className="absolute top-0 left-0 right-0 bottom-0 transition-all duration-500">
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
