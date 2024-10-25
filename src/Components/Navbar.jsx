import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge text-dark text-bg-light fs-4'>NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <li className="nav-item">
        <div className="nav-link cursor-pointer" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
      </div>
      <div className="navbar-nav">
        <li className="nav-item">
        <div className="nav-link cursor-pointer" onClick={()=>setCategory("business")}>Business</div>
        </li>
      </div>
      <div className="navbar-nav">
        <li className="nav-item">
        <div className="nav-link cursor-pointer" onClick={()=>setCategory("health")}>Health</div>
        </li>
      </div>
      <div className="navbar-nav">
        <li className="nav-item">
        <div className="nav-link cursor-pointer" onClick={()=>setCategory("sport")}>Sport</div>
        </li>
      </div>
      <div className="navbar-nav">
        <li className="nav-item">
        <div className="nav-link cursor-pointer" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
