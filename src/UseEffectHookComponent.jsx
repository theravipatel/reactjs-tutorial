import { useEffect, useState } from "react";
import LifeCycle from "./LifeCycleComponent";

function UseEffectHook() {

    const [callEveryTimeCounter, setCallEveryTimeCounter] = useState(0);
    const [callOnceCounter, setCallOnceCounter] = useState(0);
    const [callOnStateChangeCounter, setCallOnStateChangeCounter] = useState(0);
    const [showCounter, setShowCounter] = useState(true);
    
    function callEveryTimeCounterFn() {
        console.log("callEveryTimeCounterFn called every time", callEveryTimeCounter);
    }

    function callOnceCounterFn() {
        console.log("callOnceCounterFn called will be execute only once", callOnceCounter);
    }

    function callOnStateChangeCounterFn() {
        console.log("callOnStateChangeCounterFn called when state change", callOnceCounter);
    }

    /*
        // without useEffect below code will always call 
        callEveryTimeCounterFn();
        callOnceCounterFn();
    */

    
    // Called every time component renders
    useEffect(() => {
        callEveryTimeCounterFn();
    });

    // Called only once when component mounts
    useEffect(() => {
        callOnceCounterFn();
    }, []);

    // Called only when callOnStateChangeCounter state change
    useEffect(() => {
        callOnStateChangeCounterFn();
    }, [callOnStateChangeCounter]);

    return (
        <div>
            <table border="1" cellPadding="1">
                <thead>
                    <tr>
                        <td>Action</td>
                        <td>Value</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={ () => setCallEveryTimeCounter(callEveryTimeCounter+1) }>Call Everytime Counter</button>
                        </td>
                        <td>{ callEveryTimeCounter }</td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={ () => setCallOnceCounter(callOnceCounter+1) }>Call Once Counter</button>
                        </td>
                        <td>{ callOnceCounter }</td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={ () => setCallOnStateChangeCounter(callOnStateChangeCounter+1) }>Call On State Change Counter</button>
                        </td>
                        <td>{ callOnStateChangeCounter }</td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={ () => setShowCounter(!showCounter) }>Toggle Counter</button>
                        </td>
                        <td>
                            {
                                showCounter ? <LifeCycle data={callEveryTimeCounter} /> : null
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UseEffectHook;