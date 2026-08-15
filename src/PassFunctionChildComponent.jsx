import { Button } from "react-bootstrap";

function PassFunctionChild({ whichFruit }) {

    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>
                            <Button variant="danger" onClick={() => whichFruit("Apple") }>Click Apple</Button>
                        </td>
                        <td>
                            <Button variant="warning" onClick={() => whichFruit("Banana") }>Click Banana</Button>
                        </td>
                        <td>
                            <Button variant="warning" onClick={() => whichFruit("Orange") }>Click Orange</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PassFunctionChild;