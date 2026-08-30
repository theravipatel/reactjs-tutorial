import { useEffect, useState } from "react";

function GetApi() {

    const [postData, setPostData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getPosts(); 
    }, []);

    const getPosts = async () => {
        const api_base_url = "http://localhost:3000";
        let response = await fetch(api_base_url + "/posts");
        response = await response.json();
        setPostData(response);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
                            <li key={index}><b>{ post.title }</b> <small><i>(views = { post.views })</i></small></li>
                        ))
                    }
                </ul>
                :
                "Loading..."
            }
        </div>
    );

}

export default GetApi;