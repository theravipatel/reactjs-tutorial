import UseFormStatusChild from "./UseFormStatusChildComponent";

function UseFormStatusParent() {
    const submitForm = async () => {
        await new Promise( res => setTimeout(res, 3000));      
        console.log("form submitted.");  
    }
    
    return (
        <div>
            <form action={ submitForm } method="post">
                <UseFormStatusChild />
            </form>
        </div>
    );
}

export default UseFormStatusParent;