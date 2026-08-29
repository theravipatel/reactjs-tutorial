import { NavLink, Route, Routes } from "react-router";

function NavLinkActiveClass() {
    return (
        <div>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                { " | " }
                <NavLink
                    to={"/login"}
                    className={({ isActive }) => isActive ? 'custom-active fw-bold' : ''}
                >
                    Login
                </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={ <HomePageComponent /> }></Route>
                <Route path="/login" element={ <LoginPageComponent /> }></Route>
                <Route path="*" element={ null }></Route>
            </Routes>
        </div>
    );
}

function HomePageComponent() {
    return (
        <div>
            Home Page
        </div>
    );
}

function LoginPageComponent() {
    return (
        <div>
            Login Page
        </div>
    );
}

export default NavLinkActiveClass;