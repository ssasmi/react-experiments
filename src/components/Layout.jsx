import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" className={({ isActive }) => isActive ? "red" : "blue"}>Home</Link>
            </li>
            <li>
              <Link to="/app1" className={({ isActive }) => isActive ? "red" : "blue"}>App1</Link>
            </li>
            <li>
              <Link to="/app2" className={({ isActive }) => isActive ? "red" : "blue"}>App2</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>&copy; React 2021</footer>
    </>
  )
}

export { Layout }
