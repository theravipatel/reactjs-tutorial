import { useTransition } from "react";
import { Button } from "react-bootstrap";

function UseTransition() {

    const [isPending, startTransition] = useTransition();

    const handleSubmit = () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res, 3000));
        });
    }

    return (
        <div>
            <Button variant="primary" onClick={ handleSubmit } disabled={isPending}>
                { isPending ? "Submitting..." : "Submit" }
            </Button>
        </div>
    );
}

export default UseTransition;