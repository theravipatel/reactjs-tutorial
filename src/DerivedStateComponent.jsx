import { useState } from "react";
import { Button } from "react-bootstrap";

function DerivedState() {
    const [user, setUser] = useState('');
    const [users, setUsers] = useState([]);

    const saveUserHandler = () => {
        setUsers([...users, user]);
    }

    const total_users = users.length;
    const last_user_added = users[users.length-1];
    const unique_users_list = [...new Set(users)];
    const total_unique_users = unique_users_list.length;

    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>
                            <input className="form-control" type="text" onChange={ (event) => setUser(event.target.value) } />
                        </td>
                        <td>
                            <Button variant="primary" onClick={ saveUserHandler }>Add User</Button>
                        </td>
                        <td colSpan={2}>
                            :)
                        </td>
                    </tr>
                    <tr>
                        <td>Total Users: <b>{ total_users }</b></td>
                        <td>Last User Added: <b>{ last_user_added }</b></td>
                        <td>Unique Users List: <b>{ unique_users_list.join(", ") }</b></td>
                        <td>Total Unique Users: <b>{ total_unique_users }</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DerivedState;