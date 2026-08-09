import './css/style.css';

function ExternalStyle() {
    return (
        <div className="externa-style-container">
            <table className="table">
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <h3 className="title">What is Artificial Intelligence?</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://www.zabala.eu/wp-content/uploads/2023/11/Artificial-intelligente-and-consultancy.jpg" alt="What is Artificial Intelligence?" className="img" />
                        </td>
                        <td>
                            <p className="description">Artificial Intelligence (AI) is a set of technologies that allows computers and machines to copy human thinking, learning, and problem-solving. It helps systems process data, spot patterns, and make choices. </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ExternalStyle;