import { Routes, Route } from "react-router-dom"
import { Layout } from "./Layout"
import Home from "./Home"
import Tours from "../pages/Tours"
import App2 from "./App2"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tours" element={<Tours />} />
          <Route path="app2" element={<App2 />}>
            <Route path=":app2" element={<App2 />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
  )
}

export default App
