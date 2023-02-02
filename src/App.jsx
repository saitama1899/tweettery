import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Background from "./components/Background"

import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="relative transition-all duration-500">
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
