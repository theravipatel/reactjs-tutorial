function PassRefChild({ inputRef }) {
    return (
        <div>
            <input className="form-control" type="text" ref={inputRef} />
        </div>
    );
}

export default PassRefChild;