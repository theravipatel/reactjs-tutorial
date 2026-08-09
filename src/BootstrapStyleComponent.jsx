import { Button } from "react-bootstrap";

function BootstrapStyle() {
    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>
                            <Button variant="primary">Bootstrap Button</Button>
                        </td>
                        <td>
                            <button>Normal Button</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BootstrapStyle;