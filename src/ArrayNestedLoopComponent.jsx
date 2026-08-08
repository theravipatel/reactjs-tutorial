import StudentDetail from "./StudentDetailComponent";

function ArrayNestedLoop() {
    const studentData = [
        {
            name: "Ravi Patel",
            roll_number: "1",
            city: "Rajkot",
            subject_score: [
                {
                    subject1: 90,
                    subject2: 100,
                    subject3: 95,
                }
            ],
        },
        {
            name: "John Doe",
            roll_number: "2",
            city: "Amdavad",
            subject_score: [
                {
                    subject1: 80,
                    subject2: 70,
                    subject3: 75,
                }
            ],
        },
        {
            name: "Jane Doe",
            roll_number: "3",
            city: "Surat",
            subject_score: [
                {
                    subject1: 60,
                    subject2: 66,
                    subject3: 62,
                }
            ],
        }
    ];
    return (
        <div>
            <h4>Student Data</h4>
            {
                studentData.map((student, index) => (
                    <StudentDetail key={index} student={student} />
                ))
            }
        </div>
    );
}

export default ArrayNestedLoop;