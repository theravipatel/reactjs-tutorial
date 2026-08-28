import { Link, Outlet, Route, Routes } from "react-router";

function RoutePrefix() {
    return (
        <div>
            <Link to={"dashboard"} >Go to Dashboard</Link>
            <Routes>
                <Route path="dashboard" element={ <DashboardLayout /> }>
                    <Route path="users" element={ <UsersComponent /> } />
                    <Route path="settings" element={ <SettingsComponent /> } />
                </Route>
            </Routes>
        </div>
    );
}

function DashboardLayout() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                    <ul>
                        <li>
                            <Link to="users">Users</Link>
                        </li>
                        <li>
                            <Link to="settings">Settings</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

function UsersComponent() {
    return (
        <div>
            Users Page
        </div>
    );
}

function SettingsComponent() {
    return (
        <div>
            Settings Page
        </div>
    );
}

export default RoutePrefix;