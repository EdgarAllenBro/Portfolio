import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
<div className="App">
  <header className="header">
            <Link to="/">Home</Link>
  </header>
    <div className="display">
        <Outlet/>
    </div>
      <nav className="navSection">
        <ul>
          
         
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
</div>

  )
};

export default Layout;