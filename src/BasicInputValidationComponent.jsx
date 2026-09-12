import { useState } from "react";
import { Button } from "react-bootstrap";

function BasicInputValidation() {
    const [userNameErr, setUserNameErr] = useState([]);
    const [passwordErr, setPasswordErr] = useState([]);

    const handleUsername = (event) => {
        let val = event.target.value;
        let err = [];
        // Check Empty
        if (val === '') {
            err.push(['Please enter user name.']);
        }
        // Check character length
        if (val.length > 5) {
            err.push(['Max 5 character allowed.']);
        }
        // Check allowed character
        let regex= /^[0-9a-zA-Z]+$/i;
        if (!regex.test(val)) {
            err.push(['Only numeric and alphabetic character allowed.']);
        }
        
        setUserNameErr(err);
    }

    const handlePassword = (event) => {
        let val = event.target.value;
        let err = [];
        // Check Empty
        if (val === '') {
            err.push(['Please enter password.']);
        }
        // Check character length
        if (val.length > 5) {
            err.push(['Max 5 character allowed.']);
        }
        // Check allowed character
        let regex= /^[0-9a-zA-Z]+$/i;
        if (!regex.test(val)) {
            err.push(['Only numeric and alphabetic character allowed.']);
        }

        setPasswordErr(err);
    }

    return(
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Username:</td>
                        <td>
                            <input 
                                type="text"
                                onChange={handleUsername}
                                className={`form-control ${(userNameErr.length > 0) ? 'border-danger' : 'border-success'}`}
                                name="username_val"
                                id="username_val"
                            />
                            {
                                userNameErr.length > 0
                                ?
                                <ul className="list-disc list-inside text-danger mt-2">
                                    {
                                        userNameErr.map((errs, index)=>(
                                            <li key={index}>
                                                <small>{errs}</small>
                                            </li>
                                        ))
                                    }
                                </ul>
                                : 
                                ""
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>
                            <input
                                type="text"
                                onChange={handlePassword} 
                                className={`form-control ${(passwordErr.length > 0) ? 'border-danger' : 'border-success'}`}
                                name="password_val"
                                id="password_val"
                            />
                            {
                                passwordErr.length > 0
                                ?
                                <small className="text-danger">
                                    <ul className="list-disc list-inside">
                                        {
                                            passwordErr.map((err) => {
                                                <li>{err}</li>
                                            })
                                        }
                                    </ul>
                                </small>
                                : 
                                ""
                            }
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button type="submit" variant="primary" disabled={userNameErr || passwordErr ? true : false}>
                                Submit
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BasicInputValidation;