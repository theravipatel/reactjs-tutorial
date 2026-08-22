import { useId, useState } from "react";
import { Button } from "react-bootstrap";

function UseIdHook() {
    const id = useId();
    const [name, setName] = useState();

    const handleSubmit = () => {
        alert("Id = " + id + " and Name = " + name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-2">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan={3}>User Form - Id = { id }</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor={id + "name"}>Enter User Name:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id={id + "name"}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                            <td>
                                <Button type="submit" variant="primary">Submit</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default UseIdHook;