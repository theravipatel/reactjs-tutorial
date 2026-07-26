/*
function PropsChild(props) {
    return (
        <div>
            <h6>Child Component</h6>
            <ul>
                <li>Name: { props.name }</li>
                <li>Email: { props.email }</li>
                <li>Phone: { props.phone }</li>
                <li>Rollnumber: { props.rollnumber }</li>
                <li>Address: { props.addressObjData.state + ", " +  props.addressObjData.country }</li>
                <li>Color: { props.colorArrayData[0] }</li>
            </ul>
        </div>
    );
}
*/
function PropsChild({ name, email, phone, rollnumber, addressObjData, colorArrayData }) {
    return (
        <div>
            <h6>Child Component</h6>
            <ul>
                <li>Name: { name }</li>
                <li>Email: { email }</li>
                <li>Phone: { phone }</li>
                <li>Rollnumber: { rollnumber }</li>
                <li>Address: { addressObjData.state + ", " + addressObjData.country }</li>
                <li>Color: { colorArrayData[0] }</li>
            </ul>
        </div>
    );
}

export default PropsChild;