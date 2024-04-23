import type { ReactElement } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface NavBarProps {
    isAuthenticated: boolean;
}

export function NavBar({ isAuthenticated }: NavBarProps): ReactElement {
    const navigation = useNavigate();

    const handleLogout = () => {
        // Clear the token from cookies
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.reload();
    };

    const handleClients = () => {
        // Redirect to /clients
        navigation("/clients");
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Bike shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-item"
                        >
                            <a className="nav-link" href="/">Products</a>
                        </NavLink>
                    </li>
                
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        {isAuthenticated ? (
                            <NavLink
                                to="/logout"
                                className="nav-item"
                                onClick={handleLogout} // Call handleLogout function on click
                            >
                                <a className="nav-link" href="#3">Logout</a>
                            </NavLink>
                        ) : (
                            <NavLink
                                to="/login"
                                className="nav-item"
                            >
                                <a className="nav-link" href="#3">Login</a>
                            </NavLink>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
