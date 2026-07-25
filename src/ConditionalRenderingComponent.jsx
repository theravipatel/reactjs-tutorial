import { useState } from "react";

function ConditionalRendering() {
    const [isOnline, setIsOnline] = useState(true);
    const [hasUnreadMessages, setHasUnreadMessages] = useState(true);
    const [showView, setShowView] = useState('default');
    const views = {
        loading: <p>Clicked Loading</p>,
        success: <p>Clicked Success</p>,
        default: <p>Clicked Default</p>
    };

    return (
        <div>
            <div>
                <h5>Using the Ternary Operator `(? :)`</h5>
                <div>
                    <button onClick={ () => setIsOnline(!isOnline) }>Toggle Status</button>
                    User is {isOnline ? <span>Online 🟢</span> : <span>Offline 🔴</span>}
                </div>
            </div>

            <div>
                <h5>Using the Logical AND Operator `(&&)`</h5>
                <div>
                    <button onClick={ () => setHasUnreadMessages(!hasUnreadMessages) }>Toggle Status</button>
                    { hasUnreadMessages && <p>You have unread mail!</p> }
                </div>
            </div>

            <div>
                <h5>Using Switch Case or Object Mapping</h5>
                <div>
                    <button onClick={ () => setShowView('loading') }>loading</button>
                    <button onClick={ () => setShowView('success') }>success</button>
                    <button onClick={ () => setShowView('default') }>default</button>
                    <br></br>
                    <div>{views[showView] || views['default']}</div>
                </div>
            </div>
        </div>
    );
}

export default ConditionalRendering;