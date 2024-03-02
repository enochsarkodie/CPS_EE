

const Navbar:React.FC = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-md bg-success fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand text-dark fw-bold fs-3" href="#">TheSchedular</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-5 font-monospace fs-5">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ContactUS</a>
        </li>
        </ul>
        <div className="navbar-nav ms-auto">
        <h5 className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Getting Started
          </a>
          <ul className="dropdown-menu dropdown-menu-dark font-monospace">
            <li><a className="dropdown-item text-light bg" href="#">Sign Up</a></li>
            <li><a className="dropdown-item text-light" href="#">LogIn</a></li>
          </ul>
        </h5>
        </div>
      
    </div>
  </div>
</nav>
    </section>
  )
}

export default Navbar