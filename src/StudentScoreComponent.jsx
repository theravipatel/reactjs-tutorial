function StudentScore({ subject_score }) {
    return (
        <ul>
            {
                subject_score.map((subject_score, index) => (
                    <div key={index}>
                        <li>Subject 1 - { subject_score.subject1 } </li>
                        <li>Subject 2 - { subject_score.subject2 } </li>
                        <li>Subject 3 - { subject_score.subject3 } </li>
                    </div>
                ))
            }
        </ul>
    );
}

export default StudentScore;