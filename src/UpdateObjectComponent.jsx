import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

function UpdateObject() {
    const nameRef = useRef("");
    const titleRef = useRef("");
    const deptRef = useRef("");

    const [employee, setEmployee] = useState({
        name: 'Alex',
        company: {
            title: 'Developer',
            department: 'Engineering'
        }
    });

    const saveEmployeeNameHandler = () => {
        const name = nameRef.current.value;
        employee.name = name;

        setEmployee({ ...employee });
    }
    const saveEmployeeCompanyHandler = () => {
        const title = titleRef.current.value;
        const department = deptRef.current.value;

        employee.company.title = title;
        employee.company.department = department;
        console.log(employee);
        
        setEmployee({ 
            ...employee,
            company: {
                ...employee.company
            }
        });
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan={2}>Update Employee Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Name: <input className="form-control" type="text" ref={nameRef} />
                            </td>
                            <td>
                                <Button variant="primary" onClick={ saveEmployeeNameHandler }>Update</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Title: <input className="form-control" type="text" ref={titleRef} />
                                <br></br>
                                Dept: <input className="form-control" type="text" ref={deptRef} />
                            </td>
                            <td>
                                <Button variant="primary" onClick={ saveEmployeeCompanyHandler }>Update</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-6">
                <ul>
                    <li>Name: { employee.name }</li>
                    <li>Title: { employee.company.title }</li>
                    <li>Department: { employee.company.department }</li>
                </ul>
            </div>
        </div>
    );
}

export default UpdateObject;