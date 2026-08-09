import style from './css/MyCssModules.module.css';

function MyCssModules() {
    return (
        <div className={ style['externa-style-container'] }>
            <table className={ style.table }>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <h3 className={ style.title }>What is Artificial Intelligence?</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://www.zabala.eu/wp-content/uploads/2023/11/Artificial-intelligente-and-consultancy.jpg" alt="What is Artificial Intelligence?" className={ style.img } />
                        </td>
                        <td>
                            <p className={ style.description }>Artificial Intelligence (AI) is a set of technologies that allows computers and machines to copy human thinking, learning, and problem-solving. It helps systems process data, spot patterns, and make choices. </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyCssModules