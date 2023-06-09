import {NavLink, Outlet} from "react-router-dom";

export function Main () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar bg-primary" data-bs-theme="dark">
            <div  className="container-fluid">
                <h3 style={{margin:"0 0 2px 0"}}>Criminalità</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to={"/"}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home Page</a>
                            </li>
                        </NavLink>
                        <NavLink to={"/statistiche"}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Statistiche</a>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            </nav>
            <Outlet/>
        </div>
    )
}