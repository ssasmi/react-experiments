import { Outlet, NavLink, useLocation, useNavigate, useParams  } from "react-router-dom"

const Layout = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
// console.log("loc",location);
// console.log("nav",navigate);
// console.log("param",params);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink  to="/" className={({ isActive }) => isActive ? "red" : "blue"}>Home</NavLink>
            </li>
            <li>
              <NavLink  to="/tours" className={({ isActive }) => isActive ? "red" : "blue"}>Tours</NavLink>
            </li>
            <li>
              <NavLink  to="/app2" className={({ isActive }) => isActive ? "red" : "blue"}>App2</NavLink>
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
