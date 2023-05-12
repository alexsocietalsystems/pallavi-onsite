import { Link, NavLink, routes } from "@redwoodjs/router"
import { useAuth } from "src/auth"

const TopNav = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <header className="rw-header">
      <NavLink to={routes.messages()} className="rw-link" activeClassName="rw-heading rw-heading-primary">
        Messages
      </NavLink>
      <NavLink to={routes.citations()} className="rw-link" activeClassName="rw-heading rw-heading-primary">
        Citations
      </NavLink>
      <NavLink to={routes.citizens()} className="rw-link" activeClassName="rw-heading rw-heading-primary">
        Citizens
      </NavLink>
      <NavLink to={routes.home()} className="rw-link" activeClassName="rw-heading rw-heading-primary">
        Home
      </NavLink>

      {isAuthenticated ? (
        <div>
          <span>Logged in as {currentUser.name}</span>{' '}
          <button type="button" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}
    </header>
  )
}

export default TopNav
