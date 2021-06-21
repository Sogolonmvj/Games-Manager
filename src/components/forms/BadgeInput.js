import {KEY_ENTER} from '../../helpers/keyboard';

const BadgeInput = ({ label, name, values, setValues = () => {}, className = 'col-md-12 mb-3', badgeClassName = "btn badge bg-primary rounded-pill me-1" }) => {

  const data = values?.[name] || [];

  const addUniqueValue = (value) => {

    if(data.includes(value)) return; 
      data.push(value);
      setValues({ ...values, [name]: data }); // to clean the form after hitting enter
  
  };

  const onKeyDown = (e) => {

    const {target, keyCode} = e;
    const {value} = target;

    if(keyCode === KEY_ENTER) {
      e.preventDefault();
      target.value = '';
      addUniqueValue(value);
    }
  };

  const onBlur = (e) => {
    const {value} = e.target;
    if (!value) return;
    e.target.value = '';
    addUniqueValue(value);
  }

  const handleRemove = (idx, name) => {
    const newData = data.filter(v => v !== data[idx]);
    setValues({...values, [name]: newData});
  }

  const addBadge = (value, idx, name) => {
    return (
      <div key={`badge-${value}-${name}`} onClick={() => {
        handleRemove(idx, name);
      }} className= {badgeClassName}>
        {value} <span aria-hidden="true">&times;</span>
      </div>
    )
  }

    return (
        <div className={className}>
                <label htmlFor={name}>{label}</label>
                <input type="text" className="form-control" name={name} id={name} onKeyDown={onKeyDown} onBlur={onBlur} />
                <div className=" mt-1">{data.map((value, idx) => addBadge(value, idx, name))}</div>
        </div>
    )
};

export default BadgeInput;