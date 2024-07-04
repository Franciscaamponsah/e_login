import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Button from "./components/Button"
import EmptyPage from "./pages/EmptyPage"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Button/>}/>
          <Route path="*" element={<EmptyPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
