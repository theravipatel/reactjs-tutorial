import { Link, Navigate, Route, Routes } from "react-router";

function RedirectionAnd404Route() {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                { " | " }
                <Link to={"/about"}>About</Link>
                { " | " }
                <Link to={"/new-path"}>New Page</Link>
                { " | " }
                <Link to={"/unknown"}>Unknown Page</Link>
            </nav>
            <Routes>
                <Route path="/" element={ <HomePageComponent /> }></Route>
                <Route path="/about" element={ <AboutPageComponent /> }></Route>
                <Route path="/new-path" element={ <NewPageComponent /> }></Route>
                <Route path="/old-path" element={ <Navigate to="/new-path" /> }></Route>
                <Route path="/*" element={ <PageNotFoundComponent /> }></Route>
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

function AboutPageComponent() {
    return (
        <div>
            About Page
        </div>
    );
}

function NewPageComponent() {
    return (
        <div>
            New Page
        </div>
    );
}

function PageNotFoundComponent() {
    return (
        <div>
            Page Not Found Page
        </div>
    );
}

export default RedirectionAnd404Route;