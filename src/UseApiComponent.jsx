import { Suspense, use } from "react";

// fetchUserData return promise
const fetchUserData = () => fetch("https://dummyjson.com/users/?limit=5").then((res) => res.json());
const userRes = fetchUserData();

function UseApi() {
    return (
        <div>
            <Suspense fallback={ <div>Loading...</div> }>
                <User userRes={userRes} />
            </Suspense>
        </div>
    );
}

const User = ({userRes}) => {
    const userData = use(userRes);
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData?.users?.map((user, index)=>(
                            <tr key={index}>
                                <td>{ user?.id }</td>
                                <td>{ user?.username }</td>
                                <td>{ user?.email }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UseApi;