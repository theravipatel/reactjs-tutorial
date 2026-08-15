import { Button } from "react-bootstrap";
import { useFormStatus } from "react-dom";

function UseFormStatusChild() {
    const { pending, data, method, action } = useFormStatus();
    console.log("Is pending = ", pending);
    console.log("data = ", data);
    console.log("method = ", method);
    console.log("action = ", action);
    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="username">Username:</label>
                        </td>
                        <td>
                            <input type="text" id="username" name="username" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="password">Password:</label>
                        </td>
                        <td>
                            <input type="text" id="password" name="password" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <Button type="submit" variant="primary">{ pending ? "Submitting..." : "Submit" }</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UseFormStatusChild;