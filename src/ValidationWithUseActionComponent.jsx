import { useActionState } from "react";
import { Alert, Button } from "react-bootstrap";

function ValidationWithUseAction() {

    let initialResponse = {success: false, error: false, message: ""};


    const validationFormFn = async (prevFormData, formData) => {
        let response = {success: false, error: false, message: []};

        let regex= /^[0-9a-zA-Z]+$/i;

        const username_val2 = formData.get("username_val2");
        const password_val2 = formData.get("password_val2");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Check Empty
        if (username_val2 === '') {
            response.error = true;
            response.message.push(['Please enter user name.']);
        }
        // Check character length
        if (username_val2.length > 5) {
            response.error = true;
            response.message.push(['Max 5 character allowed for username.']);
        }
        // Check allowed character
        if (!regex.test(username_val2)) {
            response.error = true;
            response.message.push(['Only numeric and alphabetic character allowed for username.']);
        }
        // Check Empty
        if (password_val2 === '') {
            response.error = true;
            response.message.push(['Please enter password.']);
        }
        // Check character length
        if (password_val2.length > 5) {
            response.error = true;
            response.message.push(['Max 5 character allowed for password.']);
        }
        // Check allowed character
        if (!regex.test(password_val2)) {
            response.error = true;
            response.message.push(['Only numeric and alphabetic character allowed for password.']);
        }

        if (!response.error) {
            response.success = true;
            response.message.push(['Form data has been submitted successfully.'])
        }
        
        return response;
    }

    const [state, validationFormAction, isPending] = useActionState(validationFormFn, initialResponse);

    return (
        <div>
            {
                state.message && (
                    <Alert variant={(state.success === true) ? "success" : "danger" }>
                        {
                            state.message
                                ?
                                <ul className={`list-disc list-inside mt-2 ${(state.success === true) ? "text-success" : "text-danger" }`}>
                                    {
                                        state.message.map((errs, index)=>(
                                            <li key={index}>
                                                <small>{errs}</small>
                                            </li>
                                        ))
                                    }
                                </ul>
                                : 
                                ""
                        }
                    </Alert>
                )
            }
            <form action={validationFormAction}>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Username:</td>
                            <td>
                                <input
                                    type="text"
                                    className={`form-control`}
                                    name="username_val2"
                                    id="username_val2"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <input
                                    type="text"
                                    className={`form-control`}
                                    name="password_val2"
                                    id="password_val2"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button type="submit" variant="primary" disabled={isPending}>
                                    {isPending ? "Submitting..." : "Submit"}
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default ValidationWithUseAction;