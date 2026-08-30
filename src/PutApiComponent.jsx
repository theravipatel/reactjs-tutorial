import { useActionState, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function PutApi() {
    const api_base_url = "http://localhost:3000";
    let initialResponse = {success: false, error: false, message: ""};
    
    const [postData, setPostData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
    });

    useEffect(() => {
        setIsLoading(true);
        getPosts(); 
    }, []);

    const getPosts = async () => {
        let response = await fetch(api_base_url + "/posts");
        response = await response.json();
        setPostData(response);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    const editPost = async (id) => {
        let response = await fetch(api_base_url + "/posts/" + id, {
            method: "GET"
        });
        response = await response.json();
        setFormData({
            id: response.id,
            title: response.title
        });
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            title: event.target.value
        });
    }

    const updatePost = async (previousState, formData) => {
        let response = {success: false, error: false, message: ""};

        if (!formData.get("title") || formData.get("title") === "") {
            response.error = true;
            response.message = "Invalid data. Please enter valid data";
            return response;
        }

        const api_base_url = "http://localhost:3000";
        const dataObject = Object.fromEntries(formData);
        
        try {
            const apiResponse = await fetch(api_base_url + "/posts/" + formData.get("id"), {
                method: "PUT",
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
    const [state, updatePostAction, isPending] = useActionState(updatePost, initialResponse);

    return (
        <div>
            <h5>Posts</h5>
            {
                isLoading === false 
                ?
                <ul className="list-decimal">
                    {
                        postData.map((post, index) => (
                            <li key={index}>
                                <b>{ post.title }</b> <small><i>(views = { post.views })</i></small>&nbsp;
                                - (<button className="bg-blue-500 rounded-1" onClick={ () => editPost(post.id) }>Edit</button>)
                            </li>
                        ))
                    }
                </ul>
                :
                "Loading..."
            }
            <br />
            <form action={updatePostAction} className="mt-2">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan={3}>Update Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    id="title"
                                    value={formData.title}
                                    onChange={ handleChange }
                                />
                                <input
                                    type="hidden"
                                    name="id"
                                    id="id"
                                    value={formData.id}
                                />
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

export default PutApi;