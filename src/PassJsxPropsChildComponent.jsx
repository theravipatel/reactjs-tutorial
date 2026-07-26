function PassJsxPropsChild({ children, header, footer }) {
    return (
        <div>
            <h6>Child Component</h6>
            <header>{ header }</header>
            { children }
            <footer>{ footer }</footer>
        </div>
    );
}

export default PassJsxPropsChild;