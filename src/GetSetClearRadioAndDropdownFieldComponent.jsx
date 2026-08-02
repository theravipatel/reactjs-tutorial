import { useState } from "react";

function GetSetClearRadioAndDropdownField() {
    const defaultGender = "Male";
    const [genderVal, setGenderVal] = useState(defaultGender);
    
    const defaultCity = "City 2";
    const [cityVal, setCityVal] = useState(defaultCity);
    
    return (
        <div>
            <table width="500px" border="1" cellPadding="5">
                <tbody>
                    <tr>
                        <td>Gender:</td>
                        <td>
                            <label htmlFor="male">
                                <input
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    value="Male"
                                    onChange={ (event) => setGenderVal(event.target.value) }
                                    checked={ genderVal === "Male" }
                                />
                                Male
                            </label>
                            <br />
                            <label htmlFor="female">
                                <input
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="Female"
                                    onChange={ (event) => setGenderVal(event.target.value) }
                                    checked={ genderVal === "Female" }
                                />
                                Female
                            </label>
                        </td>
                        <td>
                            <button onClick={() => setGenderVal(defaultGender)}>Reset</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Gender value:</td>
                        <td colSpan="2">{ genderVal }</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>
                            <select
                                name="city"
                                id="city"
                                value={cityVal}
                                onChange={ (event) => setCityVal(event.target.value) }
                            >
                                <option value="City 1">City 1</option>
                                <option value="City 2">City 2</option>
                                <option value="City 3">City 3</option>
                                <option value="City 4">City 4</option>
                                <option value="City 5">City 5</option>
                            </select>
                        </td>
                        <td>
                            <button onClick={() => setCityVal(defaultCity)}>Reset</button>
                        </td>
                    </tr>
                    <tr>
                        <td>City value:</td>
                        <td colSpan="2">{ cityVal }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GetSetClearRadioAndDropdownField;