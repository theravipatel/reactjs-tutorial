import { useState } from "react";

function GetSetClearInputField() {
    const [nameVal, setNameVal] = useState("");
    return (
        <div>
            <table width="500px" border="1" cellPadding="5">
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={nameVal}
                                onChange={(event) => setNameVal(event.target.value)}
                            />
                        </td>
                        <td>
                            <button onClick={() => setNameVal("")}>Reset</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Typed value:</td>
                        <td colSpan="2">{nameVal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GetSetClearInputField;