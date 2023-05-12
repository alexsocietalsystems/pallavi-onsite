import { NavLink, routes } from "@redwoodjs/router"

const TopNav = () => {
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
  </header>
  )
}

export default TopNav
