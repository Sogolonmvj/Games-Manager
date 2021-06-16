const DateInput = ({ label, name, className = 'col-md-3 mb-3' }) => {
    return (
        <div className={className}>
                <label htmlFor={name}>{label}</label>
                <input type="text" className="form-control" name={name} id={name} />
        </div>
    )
};

export default DateInput;