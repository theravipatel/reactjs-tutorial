function LazyLoadChild() {
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
                    <tr>
                        <td>1</td>
                        <td>User 1</td>
                        <td>user1@email.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>User 2</td>
                        <td>user2@email.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>User 3</td>
                        <td>user3@email.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LazyLoadChild;