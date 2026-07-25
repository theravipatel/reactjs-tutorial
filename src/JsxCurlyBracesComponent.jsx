function JsxCurlyBraces() {
    const name = "Ravi Patel";
    const x = 10;
    const y = 20;

    const userObject = {
        name: "Ravi Patel",
        email: "ravi@patel.com"
    };

    const colorArray = ["Orange", "White", "Red"];

    const imagePath = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/330px-Flag_of_India.svg.png";

    function demoFunction() {
        return "This is from the demo function.";
    }

    function calFunction(arg1, arg2, operation = "sum") {
        if (!arg1 || !arg2) {
            return "Error!";
        }

        if (operation === "sum") {
            return arg1 + arg2;
        } else if (operation === "subtract") {
            return arg1 - arg2;
        } else {
            return "Invalid operation!";
        }
    }

    return (
        <div>
            <ul>
                <li>
                    <h4>Using Variables</h4>
                    <p>Name: {name}</p>
                    <p>x + y = {x + y}</p>
                </li>
                <li>
                    <h4>Conditional Rendering</h4>
                    <p>{(name) ? name : "-"}</p>
                </li>
                <li>
                    <h4>Using Functions</h4>
                    <p>{demoFunction()}</p>
                </li>
                <li>
                    <h4>Performing Operations</h4>
                    <p>Sum of 5 & 10 = {calFunction(5, 10)}</p>
                    <p>Subtract of 10 & 1 = {calFunction(10, 1, "subtract")}</p>
                </li>
                <li>
                    <h4>Using Objects</h4>
                    <p>User Name = {userObject.name}</p>
                    <p>User Email = {userObject.email}</p>
                </li>
                <li>
                    <h4>Using Arrays</h4>
                    <p>First color = {colorArray[0]}</p>
                </li>
                <li>
                    <h4>Using HTML Tag Attributes</h4>
                    <input type="text" name="name" value={name} />
                    <br /><br />
                    <img src={imagePath} alt="India Flag" width="200px" />
                </li>
            </ul>
        </div>
    );
}

export default JsxCurlyBraces;