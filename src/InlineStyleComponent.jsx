function InlineStyle() {
    const styleObj = {
        color: '#FBC02D',
        backgroundColor: '#607D8B',
        margin: '10px 0',
        padding: '5px',
        borderRadius: '5px',
        border: '2px solid #E91E63'
    };
    return (
        <div>
            <h4 style={{ color: '#3949AB', backgroundColor: '#FF8A65', margin: '10px 0', padding: '5px', borderRadius: '5px', border: '2px solid #43A047' }}>Inline style inside div</h4>
            <h4 style={ styleObj }>Inline style using object</h4>
        </div>
    );
}

export default InlineStyle;