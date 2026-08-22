import { useState } from "react";
import { Button } from "react-bootstrap";
import LiftingStateChild1 from "./LiftingStateChild1Component";
import LiftingStateChild2 from "./LiftingStateChild2Component";

function LiftingStateParent() {
    const [user, setUser] = useState('');
    const [users, setUsers] = useState([]);

    const saveUserHandler = () => {
        setUsers([...users, user]);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <LiftingStateChild1 setUser={ setUser } saveUserHandler={ saveUserHandler } />
                </div>
                <div className="col-md-6">
                    <LiftingStateChild2 users={ users } />
                </div>
            </div>
        </div>
    );
}

export default LiftingStateParent;