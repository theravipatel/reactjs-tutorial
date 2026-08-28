import { Link, Route, Routes } from "react-router";

function ReactRouter() {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                { " | " }
                <Link to={"/about"}>About</Link>
            </nav>
            <Routes>
                <Route path="/" element={ <HomePageComponent /> }></Route>
                <Route path="/about" element={ <AboutPageComponent /> }></Route>
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

export default ReactRouter;