import { useRef } from "react";
import { Button } from "react-bootstrap";

function UseRefHook() {
    const inputRef = useRef(null);
    const focusHandler = () => {
        console.log("inputRef => ", inputRef);
        inputRef.current.focus();
    }
    const setValueHandler = () => {
        console.log("inputRef => ", inputRef);
        inputRef.current.value = "Default Value";
        inputRef.current.style.color = "yellow";
    }
    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <input className="form-control" type="text" ref={inputRef} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button variant="primary" onClick={ focusHandler }>Focus Input</Button>
                        </td>
                        <td>
                            <Button variant="secondary" onClick={ setValueHandler }>Set Default Value in Input</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UseRefHook;