import PassJsxPropsChild from "./PassJsxPropsChildComponent";

function PassJsxPropsParent() {
    return (
        <div>
            <h6>Parent Component</h6>
            <p>-------</p>
            <PassJsxPropsChild
                header={<p><u>This is my Header</u></p>}
                footer={<p><u>This is my footer</u></p>}
            >
                <p>Hello Everyone,</p>
                <p>This is all about the content of the body.</p>
            </PassJsxPropsChild>
        </div>
    );
}

export default PassJsxPropsParent;