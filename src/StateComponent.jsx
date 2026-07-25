import { useState } from "react";

function MyCount() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(10);

    return (
        <div>
            <h6>Count 1 is { count1 }</h6>
            <h6>Count 2 is { count2 }</h6>
            <button onClick={ () => setCount1(count1 + 1) }>Increase Count by 1</button>
            <br></br>
            <button onClick={ () => setCount2(count2 - 1) }>Decrease Count by 1</button>
        </div>
    );
}

export default MyCount;