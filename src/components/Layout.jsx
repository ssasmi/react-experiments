import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/app1">App1</Link>
              </li>
              <li>
                <Link to="/app2">App2</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

        <footer>&copy; React 2021</footer>
      </body>
    </>
  )
}

export { Layout }
