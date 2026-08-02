import { useState } from "react";

function GetSetClearCheckboxField() {
    const [skillsVal, setSkillsVal] = useState([]);

    const handleCheckbox = ((event) => {
        console.log(event.target.value, event.target.checked);
        // Here we are using spread operator to add the new value to the existing array of selected values. If the checkbox is unchecked, we filter out the value from the array.
        if (event.target.checked) {
            setSkillsVal([...skillsVal, event.target.value]);
        } else {
            setSkillsVal([...skillsVal.filter((item) => item != event.target.value)]);
        }
    });

    const clearCheckboxField = (() => {
        setSkillsVal([]);
        // Get all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        // Loop through each checkbox and uncheck it
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    });

    return (
        <div>
            <table width="500px" border="1" cellPadding="5">
                <tbody>
                    <tr>
                        <td>Skills:</td>
                        <td>
                            <label htmlFor="php">
                                <input
                                    type="checkbox"
                                    name="skills[]"
                                    id="php"
                                    value="PHP"
                                    onChange={handleCheckbox}
                                />
                                PHP
                            </label>
                            <br />
                            <label htmlFor="reactjs">
                                <input
                                    type="checkbox"
                                    name="skills[]"
                                    id="reactjs"
                                    value="ReactJS"
                                    onChange={handleCheckbox}
                                />
                                ReactJS
                            </label>
                        </td>
                        <td>
                            <button onClick={() => clearCheckboxField() }>Reset</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Selected value:</td>
                        <td colSpan="2">{ skillsVal.toString() }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GetSetClearCheckboxField;