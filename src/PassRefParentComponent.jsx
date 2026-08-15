import { useRef } from "react";
import { Button } from "react-bootstrap";
import PassRefChild from "./PassRefChildComponent";

function PassRefParent() {
    const inputRef = useRef(null);

    const updateInputHandler = () => {
        inputRef.current.value = 5000;
        inputRef.current.focus();
    }

    const clearInputHandler = () => {
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <PassRefChild inputRef={inputRef} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button variant="primary" onClick={ updateInputHandler }>Update Input</Button>
                        </td>
                        <td>
                            <Button variant="danger" onClick={ clearInputHandler }>Clear Input</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PassRefParent;