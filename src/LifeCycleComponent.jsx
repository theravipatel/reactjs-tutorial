import { useEffect } from "react";

function LifeCycle({ data }) {
    // Called when mount
    useEffect(() => {
        console.log("LifeCycle Method - called when mount");
    }, []);

    // Called when update
    useEffect(() => {
        console.log("LifeCycle Method - called when update");
    }, [data]);

    // Called when unmount
    useEffect(() => {
        return (() => {
            console.log("LifeCycle Method - called when unmount");
        });
    }, []);

    return (
        <div>
            <h6><i>{ data }</i></h6>
        </div>
    );
}

export default LifeCycle;