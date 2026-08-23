import { useContext } from "react";
import MyContext from "./MyContext";

function ContextApiChild() {
    const { subject, subjectLabel } = useContext(MyContext);
    return (
        <div>
            <b>{ subjectLabel }</b>: { subject }
        </div>
    );
}

export default ContextApiChild;