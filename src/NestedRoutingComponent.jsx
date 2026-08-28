import { Link, Outlet, Route, Routes } from "react-router";

function NestedRouting() {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/main-page"}>Main Page</Link>
                    <ul>
                        <li>
                            <Link to="/main-page/sub-page-1">Sub Page 1</Link>
                        </li>
                        <li>
                            <Link to="/main-page/sub-page-2">Sub Page 2</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <Routes>
                {/* Parent Route */}
                <Route path="main-page" element={ <PageLayoutComponent /> }>
                    {/* Index Route renders at "/main-page" */}
                    <Route index element={ <MainPageComponent /> } ></Route>
                    {/* Nested Route */}
                    <Route path="sub-page-1" element={ <SubPage1Component /> }></Route>
                    <Route path="sub-page-2" element={ <SubPage2Component /> }></Route>
                </Route>
                <Route path="*" element={ null }></Route>
            </Routes>
        </div>
    );
}

function PageLayoutComponent() {
    return (
        <div>
            Parent Layout
            {/* The child routes will inject their components right here */}
            <Outlet />
        </div>
    );
}

function MainPageComponent() {
    return (
        <div>
            Main Page
        </div>
    );
}

function SubPage1Component() {
    return (
        <div>
            Sub Page 1
        </div>
    );
}

function SubPage2Component() {
    return (
        <div>
           Sub Page 2
        </div>
    );
}

export default NestedRouting;