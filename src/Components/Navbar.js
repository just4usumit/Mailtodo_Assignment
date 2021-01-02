import React from 'react'
import logo from './../FrontendAssets/logo.svg'
import logo2 from './../FrontendAssets/profile.svg'
const navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            
  <span className="ml-4">
  <a  className="px-3"href="www.google.com"><span><img height="40 px;" alt="brandimage" src={logo} /></span>
  </a>

  <h6 className="d-inline">Intugine</h6>
  </span>
  
  <div className="collapse navbar-collapse text-dark" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mr-4 px-3">
      <li className="nav-item active px-2">
        <a className="nav-link" href="#"><h6>Home</h6></a>
      </li>
      <li className="nav-item active px-2">
        <a className="nav-link" href="#"><h6>Brands</h6></a>
      </li>
      <li className="nav-item active px-2">
        <a className="nav-link" href="#"><h6>Transporters</h6></a>
      </li>
      <li className="nav-item dropdown px-2">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="d-inline">
              <img src={logo2} ></img>
          </div>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
</nav>
    )
}

export default navbar