import { preventSubmitOnEnter } from '../../helpers/keyboard';

const Input = ({ label, name, values, setValues = () => {}, className = 'col-md-12 mb-3', preventSubmit = true }) => {
    
    const value = values?.[name] || '';

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <input type="text" className="form-control" name={name} id={name} value={value}  onChange={onChange} onKeyDown={preventSubmit ? preventSubmitOnEnter : () => {}} />
        </div>
    )
};

export default Input;