import { useState } from "react";

function UpdateArray() {
    const [userNames, setUserNames] = useState(["Test 1", "Test 2", "Test 3"]);
    const [userDetails, setUserDetails] = useState([
        {name: "Test 100", age: "1"},
        {name: "Test 200", age: "2"},
        {name: "Test 300", age: "3"},
    ]);

    const updateLastUserName = (val) => {
        const updatedUserName = [...userNames];
        updatedUserName[updatedUserName.length - 1] = val;

        setUserNames(updatedUserName);
    }

    const updateLastUserAge = (val) => {
        const updatedLastUserAge = [...userDetails];
        updatedLastUserAge[updatedLastUserAge.length - 1].age = val;

        setUserDetails(updatedLastUserAge);
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan={2}>Update Last User's Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <ul>
                                    {
                                        userNames.map((userName, index) => (
                                            <li key={index}>{ userName }</li>
                                        ))
                                    }
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Enter last user's name:</td>
                            <td>
                                <input type="text" className="form-control" onChange={ (event) => updateLastUserName(event.target.value) } />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-6">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan={2}>Update Last User's Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <ul>
                                    {
                                        userDetails.map((userDetail, index) => (
                                            <li key={index}>{ userDetail.name } : Age - { userDetail.age } Yr</li>
                                        ))
                                    }
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Enter last user's age:</td>
                            <td>
                                <input type="text" className="form-control" onChange={ (event) => updateLastUserAge(event.target.value) } />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UpdateArray;