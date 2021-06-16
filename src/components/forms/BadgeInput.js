const BadgeInput = ({ label, name, className = 'col-md-12 mb-3' }) => {
    return (
        <div className={className}>
                <label htmlFor={name}>{label}</label>
                <input type="text" className="form-control" name={name} id={name} />
                <div className=" mt-1">
                  <button className="btn badge badge-primary badge-pill mr-1">
                    Secondary <span aria-hidden="true">&times;</span>
                  </button>
                  <button className="btn badge badge-primary  badge-pill mr-1">
                    Secondary <span aria-hidden="true">&times;</span>
                  </button>
                  <button className="btn badge badge-primary  badge-pill mr-1">
                    Secondary <span aria-hidden="true">&times;</span>
                  </button>
                  <button className="btn badge badge-primary  badge-pill mr-1">
                    Secondary <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
    )
};

export default BadgeInput;