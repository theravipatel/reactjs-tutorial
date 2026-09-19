import { useEffect, useEffectEvent, useState } from "react";

function UseEffectEventHook() {
    const [useEffectEventCount, setUseEffectEventCount] = useState(0);

    // 1. Extract the non-reactive side-effect logic.
    // This always sees the latest 'count' state, but it is not reactive.
    const countControl = useEffectEvent(() => {
        setUseEffectEventCount(useEffectEventCount + 1);
    });
    
    // 2. Setup the interval inside useEffect.
    useEffect(() => {
        const interval = setInterval(() => {
            countControl(); // 3. Call the stable event function
        }, 1000);

        return () => clearInterval(interval);
    }, []); //  Empty array! The interval starts ONCE and never resets.
    return (
        <div>
            <h5>Use Effect Event Count: { useEffectEventCount }</h5>
        </div>
    );
}

export default UseEffectEventHook;