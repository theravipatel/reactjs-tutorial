import { useActionState } from "react";
import { Alert, Button } from "react-bootstrap";

function PostApi() {
    let initialResponse = {success: false, error: false, message: ""};

    // Define the action function
    const addPost = async (previousState, formData) => {
        let response = {success: false, error: false, message: ""};

        if (!formData.get("title") || formData.get("title") === "") {
            response.error = true;
            response.message = "Invalid data. Please enter valid data";
            return response;
        }

        const api_base_url = "http://localhost:3000";
        const dataObject = Object.fromEntries(formData);
        
        try {
            const apiResponse = await fetch(api_base_url + "/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataObject)
            });
            
            if (!apiResponse.ok) {
                throw new Error(
                    `Failed to add post. Status: ${apiResponse.status}`
                );
            }

            response.success = true;
            response.message = "Post has been added successfully!";
        } catch (error) {
            response.error = true;
            response.message = "Error adding post: " + error.message;
        }
        return response;
    }

    // Tie the action function to state management
    const [state, addPostAction, isPending] = useActionState(addPost, initialResponse);

    return (
        <div>
            {
                state.message && (
                    <Alert variant={(state.success === true) ? "success" : "danger" }>
                        { state.message }
                    </Alert>
                )
            }
            <form action={addPostAction} className="mt-2">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan={3}>Add Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td>
                                <input type="text" className="form-control" name="title" id="title" />
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

export default PostApi;