const Input = ({ label, name, className = 'col-md-12 mb-3' }) => {
    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <input type="text" className="form-control" name={name} id={name} />
        </div>
    )
};

export default Input;