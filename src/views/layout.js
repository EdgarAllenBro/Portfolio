import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
<div>
  <header className="header">
            <Link className="link" to="/">Home</Link>
  </header>
  <main className="App">
    <div className="display">
        <Outlet/>
    </div>
      <nav className="navSection">
        <ul>
          <li>
            <Link className="link" to="/About">About</Link>
          </li>
          <li>
            <Link className='link' to="/Projects">Projects</Link>
          </li>
          <li>
            <Link className="link" to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
</div>

  )
};

export default Layout;