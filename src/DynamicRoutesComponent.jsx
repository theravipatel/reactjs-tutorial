import { Link, Route, Routes, useParams } from "react-router";

function DynamicRoutes() {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                { " | " }
                <Link to={"/users"}>Users</Link>
            </nav>
            <Routes>
                <Route path="/" element={ <HomePageComponent /> }></Route>
                <Route path="/users" element={ <UsersListPageComponent /> }></Route>
                <Route path="/users/:id" element={ <UserDetailPageComponent /> }></Route>
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

function UsersListPageComponent() {
    const usersData = [
        {id: 1, name: "User 1"},
        {id: 2, name: "User 2"},
        {id: 3, name: "User 3"},
    ];
    return (
        <div>
            Users List Page
            <br />
            <ul>
                {
                    usersData.map((user, index)=>(
                        <li key={index}><Link to={ `/users/${user.id}` }>{ user.name }</Link></li>
                    ))
                }
            </ul>
        </div>
    );
}

function UserDetailPageComponent() {
    const parameterData = useParams();
    const userId = parameterData.id;
    return (
        <div>
            <h5>User Detail Page</h5>
            <br />
            <h6>The selected user id is { userId }</h6>
            <br />
            <Link to={'/users'}>Go Back to Users List Page</Link>
        </div>
    );
}

export default DynamicRoutes;