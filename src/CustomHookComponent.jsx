import { Button } from "react-bootstrap";
import useToggle from "./hooks/useToggle";

function CustomHook() {
    const [toggleVal, toggleDivFn] = useToggle(true);
    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td colSpan={3} align="center">
                            {
                                toggleVal && <h3>Hello Custom Hook!</h3>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button type="button" onClick={ toggleDivFn } variant={ toggleVal === true ? "danger" : "success" }>Toggle Div</Button>
                        </td>
                        <td>
                            <Button type="button" onClick={ () => toggleDivFn(true) }>Show Div</Button>
                        </td>
                        <td>
                            <Button type="button" onClick={ () => toggleDivFn(false) }>Hide Div</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CustomHook;