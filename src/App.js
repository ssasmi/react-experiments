import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="app1" element={<App1 />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
