import { useOptimistic, useState, useTransition } from "react";
import { Button } from "react-bootstrap";

// 1. Define the pure update function outside the component
const updateFn = (currentLikes, delta) => {
    return currentLikes + delta;
}

function UseOptimisticHook() {
    
    // 2. The true state (Source of Truth)
    const [likeCount, setLikeCount] = useState(0);

    // Get startTransition to wrap optimistic updates
    const [isPending, startTransition] = useTransition();

    // 3. Define the Optimistic hook using the named updateFn
    const [optLikeCount, addOptLikeCount] = useOptimistic(likeCount, updateFn);

    // 4. The async handler (must be wrapped in a Transition or Form Action)
    const handleLikeCount = async () => {
        // Wrap the optimistic update in startTransition
        startTransition(async () => {
            // Instantly bump the counter in the UI by 1
            // The argument you pass to addOptLikeCount() becomes the second parameter of your updateFn:
            addOptLikeCount(1);

            // Without updateFn, we can write as below
            // addOptLikeCount((prev) => prev + 1);

            // Simulate network request to backend
            try {
                await sendLikeToServer(); 

                // If successful, permanently update the true state
                setLikeCount((prev) => prev + 1);
            } catch (error) {
                console.error("Failed to update likes on server:", error);
                // NOTE: No manual rollback code is needed! 
                // Because `likes` didn't change, React automatically reverts the UI.
            }
        });
    }

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            <h4 className="text-center">
                                Like Count: { optLikeCount }
                            </h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-100">
                            <Button
                                type="button"
                                className="w-full"
                                variant="primary"
                                disabled={isPending}
                                onClick={() => handleLikeCount()}
                            >
                                { isPending ? "Liking..." : "Like" }
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const sendLikeToServer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            //reject(new Error("Network Error"));
        }, 3000);
    })
}

export default UseOptimisticHook;