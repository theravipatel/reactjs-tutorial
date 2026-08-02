import ReuseComponent from "./ReuseComponent";

function ReuseComponentInLoop() {
    const userData = [
        { id: 1, name: "User 1", email: "user1@test.com" },
        { id: 2, name: "User 2", email: "user2@test.com" },
        { id: 3, name: "User 3", email: "user3@test.com" },
    ];
    return (
        <div>
            <table width="500px" border="1" cellPadding="5">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => {
                            return (
                                <ReuseComponent key={ user.id } user={ user } />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ReuseComponentInLoop;