import { Button } from "react-bootstrap";

function LiftingStateChild1({ setUser, saveUserHandler }) {
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th colSpan={2}>Add User Form (Child Component 1)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input className="form-control" type="text" onChange={ (event) => setUser(event.target.value) } />
                        </td>
                        <td>
                            <Button variant="primary" onClick={ saveUserHandler }>Add User</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LiftingStateChild1;