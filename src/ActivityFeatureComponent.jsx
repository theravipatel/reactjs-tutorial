import { Activity, useState } from "react";
import { Button } from "react-bootstrap";

function ActivityFeature() {
    const [activeTab, setActiveTab] = useState('step1');
    return (
        <div>
            <h4>User Form</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>
                            <Button
                                type="button"
                                className="w-full"
                                variant={ (activeTab === "step1") ? "primary" : "light" }
                                onClick={ () => setActiveTab('step1') }
                            >
                                Show Step 1
                            </Button>
                        </td>
                        <td>
                            <Button
                                type="button"
                                className="w-full"
                                variant={ (activeTab === "step2") ? "primary" : "light" }
                                onClick={() => setActiveTab('step2')}
                            >
                                Show Step 2
                            </Button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Activity mode={ (activeTab === "step1") ? "visible" : "hidden" }>
                                <Step1Form></Step1Form>
                            </Activity>
                            <Activity mode={ (activeTab === "step2") ? "visible" : "hidden" }>
                                <Step2Form></Step2Form>
                            </Activity>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function Step1Form() {
    return (
        <div>
            <label>Name</label>
            <input type="text" className="form-control" />
        </div>
    );
}

function Step2Form() {
    return (
        <div>
            <label>Email</label>
            <input type="text" className="form-control" />
        </div>
    );
}

export default ActivityFeature;