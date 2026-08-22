import { useActionState } from "react";
import { Alert, Button } from "react-bootstrap";

function UseActionStateHook() {
    let response = {success: false, error: false, message: ""};

    // Define the action function
    const submitFormFn = async (previousState, formData) => {
        const useremail = formData.get("useremail");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 3000));

        if (!useremail || !useremail.includes("@")) {
            response.error = true;
            response.message = "Invalid email address.";
        } else {
            response.success = true;
            response.message = "Successfully registered!";
        }
        return response;
    }

    // Tie the action function to state management
    const [state, submitFormAction, isPending] = useActionState(submitFormFn, response);

    return (
        <div>
            {
                state.message && (
                    <Alert variant={(state.success === true) ? "success" : "danger" }>
                        { state.message }
                    </Alert>
                )
            }
            <form action={submitFormAction} className="mt-2">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan={3}>User Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Enter User Email:</td>
                            <td>
                                <input type="text" className="form-control" name="useremail" id="useremail" />
                            </td>
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

export default UseActionStateHook;