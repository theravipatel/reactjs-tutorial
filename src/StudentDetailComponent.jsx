import StudentScore from "./StudentScoreComponent";

function StudentDetail({ student }) {
    return (
        <div style={{
            border: "1px solid #FBC02D",
            borderRadius: "10px",
            padding: "5px",
            margin: "5px"
        }}>
            <h4 style={{ margin: "5px 0" }}>{ student.name }</h4>
            <ul style={{ margin: "5px 0", fontSize: "0.83em" }}>
                <li>Roll No.: { student.roll_number }</li>
                <li>City: { student.city }</li>
                <li>
                    Subject Scores:
                    <StudentScore subject_score={student.subject_score} />
                </li>
            </ul>
        </div>
    );
}

export default StudentDetail;