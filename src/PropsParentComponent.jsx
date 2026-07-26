import PropsChild from "./PropsChildComponent";

function PropsParent() {
    const rollnumber = 10;
    const addressObjData = {
        state: "Gujarat",
        country: "Bharat",
    };
    const colorArrayData = ["Orange", "White", "Red"];
    return (
        <div>
            <h6>Parent Component</h6>
            <p>-------</p>
            <PropsChild
                name="Ravi Patel"
                email="ravi@patel.com"
                phone={123456}
                rollnumber={rollnumber}
                addressObjData={addressObjData}
                colorArrayData={colorArrayData}
            />
        </div>
    );
}

export default PropsParent;