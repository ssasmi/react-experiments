import { Routes, Route } from "react-router-dom"
import { Layout } from "./Layout"
import Home from "../components/Home"
import App1 from "./App1"
import App2 from "./App2"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="app1" element={<App1 />} />
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
