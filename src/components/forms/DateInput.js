import { preventSubmitOnEnter } from '../../helpers/keyboard';

const DateInput = ({ label, name, values, setValues = () => {}, className = 'col-md-3 mb-3', preventSubmit = true }) => {

    const maskDateValue = (value) => {
        // YYYY-MM-DD
        const numbersOnly = value.replace(/\D/g, '');
        const year = numbersOnly.substring(0, 4);
        const month = numbersOnly.substring(4, 6);
        const day = numbersOnly.substring(6, 8);

        const date = [];
        if (year.length) date.push(year);
        if (month.length) date.push(month);
        if (day.length) date.push(day);
        
        return date.join('-');
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        const maskedValue = maskDateValue(value);
        setValues({ ...values, [name]: maskedValue });
    };

    const value = maskDateValue(values?.[name] || '');
    
    return (
        <div className={className}>
                <label htmlFor={name}>{label}</label>
                <input type="text" className="form-control" name={name} id={name} value={value} onChange={onChange} onKeyDown={preventSubmit ? preventSubmitOnEnter : () => {}} placeholder="YYYY-MM-DD" />
        </div>
    )
};

export default DateInput;