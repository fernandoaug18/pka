import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-center mb-8">PKA</h1>
              <p className="text-center text-lg">Página restaurada correctamente</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App