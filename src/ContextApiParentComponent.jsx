import { useState } from "react";
import ContextApiChild from "./ContextApiChildComponent";
import MyContext from "./MyContext";

function ContextApiParent() {
    const [subject, setSubject] = useState();
    const subjectLabel = "Selected Subject: ";
    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Parent Component</td>
                        <td>Child Component</td>
                    </tr>
                    <tr>
                        <td>
                            <select className="form-control" name="subject" id="subject" onChange={ (event) => setSubject(event.target.value) }>
                                <option value="">--Please Select Subject--</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Sanskrit">Sanskrit</option>
                                <option value="Gujarati">Gujarati</option>
                                <option value="Maths">Maths</option>
                            </select>
                        </td>
                        <td>
                            <MyContext value={{ subject, subjectLabel }}>
                                <ContextApiChild />
                            </MyContext>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ContextApiParent;