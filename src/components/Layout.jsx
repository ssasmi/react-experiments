import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <body>
        <header>
          <Link to="/">Home</Link>
            <Link to="/app1">App1</Link>
            <Link to="/app2">App2</Link>
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
