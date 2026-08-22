function LiftingStateChild2({ users }) {
    const unique_users_list = [...new Set(users)];
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Unique User List  (Child Component 2)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            { unique_users_list.join(", ") }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LiftingStateChild2;