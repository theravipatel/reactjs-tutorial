import PassFunctionChild from "./PassFunctionChildComponent";

function PassFunctionParent() {
    
    const whichFruit = (name) => {
        alert("It is " + name + "...!!!");
    }

    return (
        <div>
            <PassFunctionChild whichFruit={whichFruit} />
        </div>
    );
}

export default PassFunctionParent;