import { useEffect, useState } from "react";

function DeleteApi() {
    const api_base_url = "http://localhost:3000";
    
    const [postData, setPostData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    const deletePost = async (id) => {
        let response = await fetch(api_base_url + "/posts/" + id, {
            method: "DELETE"
        });
        response = await response.json();
        if (response) {
            alert("Post deleted successfully.");
        } else {
            alert("Something went wrong.");
        }
    }

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
                                - (<button className="bg-red-500 rounded-1" onClick={ () => deletePost(post.id) }>Delete</button>)
                            </li>
                        ))
                    }
                </ul>
                :
                "Loading..."
            }
        </div>
    );
}

export default DeleteApi;