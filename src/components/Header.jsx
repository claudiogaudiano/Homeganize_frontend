import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import Sidebar from "./Sidebar";


function Header() {
  return (
    <nav class="navbar bg-body-tertiary"> {/* fixed-top fa rimanere la nav in cima,  */}
       {/*nel momento in cui sposto l'attributo nel nav si rompetutto */}

        {/*Offcanvas*/}
        <div class="d-block d-sm-none">  {/*serve per mostrare l'offcanvas solo per schermi  xs*/}
        <button class="navbar-toggler ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <Sidebar />
          </div>
        </div>
        </div>

        {/*Brand Name and Logo*/}

        <a class="navbar-brand ms-4" href="#">
          <i class="bi bi-house-fill"></i>
          {/*<img src="https://www.freepnglogos.com/uploads/logo-home-png/house-logo-design-vector-real-estate-logo-photos-25.png" width="30" height="30" alt="Logo" />*/}
          <div className="d-none d-sm-inline"> Homeganizer</div>
        </a>

        {/*Right-side of Navbar*/}
        <nav class="navbar-expand">
        <ul class="navbar-nav me-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sign up</a>
          </li>

          {/*Settings Button*/}
          <li class="nav-item dropdown">
            <a class="nav-link btn btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
              <i class="bi bi-gear"></i>
            </a>
            {/*Settings Options*/}
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        </nav>
      
    </nav>
  );
}

export default Header;
