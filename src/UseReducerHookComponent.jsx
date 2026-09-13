// Plus-Minus Functional Counter System

import { useReducer } from "react";
import { Button } from "react-bootstrap";


// 1. Define the initial state structure
const initialState = { count: 0 };

// 2. Build the pure reducer function to calculate state changes
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        case 'setValue':
            return { count: action.payload }; // payload passes dynamic data
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// 3. Implement the Hook inside the component
function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th colSpan="4">
                            <h4 className="text-center">
                                Count: { state.count }
                            </h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-25">
                            <Button
                                type="button"
                                className="w-full"
                                variant="primary"
                                onClick={() => dispatch({ type: 'increment' })}
                            >
                                Increment ++
                            </Button>
                        </td>
                        <td className="w-25">
                            <Button
                                type="button"
                                className="w-full"
                                variant="danger"
                                onClick={() => dispatch({ type: 'decrement' })}
                            >
                                Decrement --
                            </Button>
                        </td>
                        <td className="w-25">
                            <Button
                                type="button"
                                className="w-full"
                                variant="info"
                                onClick={() => dispatch({ type: 'reset' })}
                            >
                                Reset 0
                            </Button>
                        </td>
                        <td className="w-25">
                            <Button
                                type="button"
                                className="w-full"
                                variant="warning"
                                onClick={() => dispatch({ type: 'setValue', payload: 100 })}
                            >
                                Set to 100
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UseReducerHook;