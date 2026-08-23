import { Fragment } from "react";

function FragmentComponent() {
    // return (
    //     <MyDiv1 />
    // );
    return (
        <MyDiv2 />
    );
}

function MyDiv1() {
    return (
        <>
            <h3>Hello World!</h3>
        </>
    );
}

function MyDiv2() {
    return (
        <Fragment key={"my_key"}>
            <h3>Hello World Again!</h3>
        </Fragment>
    );
}

export default FragmentComponent;