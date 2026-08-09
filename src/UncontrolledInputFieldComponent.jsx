import { useRef } from "react";
import { Button } from "react-bootstrap";

function UncontrolledInputField() {
    const usernameRef = useRef("");

    // Using DOM method
    const handleInputDom = () => {
        const username = document.querySelector("#usernameDom").value;
        console.log("usernameDom = ", username);
    }

    // Using react ref
    const handleInputRef = () => {
        const username = usernameRef.current.value;
        console.log("usernameRef = ", username);
    }

    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>
                            <input type="text" id="usernameDom" className="form-control" />
                        </td>
                        <td>
                            <Button variant="primary" onClick={ handleInputDom }>Submit DOM</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" id="usernameRef" ref={ usernameRef } className="form-control" />
                        </td>
                        <td>
                            <Button variant="secondary" onClick={ handleInputRef }>Submit Ref</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UncontrolledInputField;