function JsxDemo () {
    function clickMe () {
        alert("Hello There!");
    }

    return (
        <>
            <h2>JSX Demo Title</h2>
            <hr />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/330px-Flag_of_India.svg.png" alt="India Flag" width="200px" />
            <hr />
            <p>This is JSX Demo</p>
            <button onClick={clickMe}>Click Me</button>
        </>
    );
}

export default JsxDemo;