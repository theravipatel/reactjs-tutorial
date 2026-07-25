function FunctionCallClickEvent() {
    function demoFunction() {
        alert("This is from the demo function.");
    }
    const arrowFunction = () => {
        alert("This is from the Arrow function!");
    };
    const paramFunction = (name) => {
        alert("You have clicked " + name);
    };

    return (
        <div>
            <div>
                <h6>Normal Function</h6>
                <button onClick={demoFunction}>Call Normal Function</button>
            </div>
            <div>
                <h6>Arrow Function</h6>
                <button onClick={arrowFunction}>Call Arrow Function</button>
            </div>
            <div>
                <h6>Function with Parameter</h6>
                <button onClick={ () => paramFunction("Apple") }>Click Apple</button>
                <br />
                <button onClick={ () => paramFunction("Orange") }>Click Orange</button>
            </div>
        </div>
    );
}

export default FunctionCallClickEvent;