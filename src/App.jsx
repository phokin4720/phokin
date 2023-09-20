import { useState, useEffect } from "react";
import './App.css'

function App() {
  const initialValues = { name: '', email: '', password: '', tel: '', address: '' , gender: ''};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
    const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = <label>name is required field</label>
    }
    else if(!values.name){
    printError("nameErr", "");
    nameErr = false;
}

    if (!values.email) {
      errors.email = <label>email is required field</label>
    } else if (!regex.test(values.email)) {
      errors.email = <label>This is not a valid email format!</label>
    }
    if (!values.password) {
      errors.password = <label>Password is required</label>
    } else if (values.password.length < 8) {
      errors.password = <label>Password must be at least 8 characters</label>
    } 
    
    if (!values.tel) {
      errors.tel = <label>tel is required</label>
    } else if (values.tel.length < 8) {
      errors.tel = <label>tel must be at least 8 characters</label>
    } 

    if (!values.address) {
      errors.address = <label>address is required</label>
    }
    if (!values.gender) {
     errors.gender = <label>gender is required</label>;
    }

    return errors;
  };

  return (
    <div className="Forms">
      <form onSubmit={handleSubmit}>
        <div className="is-invalid">
          <div className="field">
            Name
            <p><input
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
            /></p>
          </div>
        <p>{formErrors.name}</p>

          <div className="field">
            Email
            <p><input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            /></p>
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            Password
            <p><input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            /></p>
          </div>
          <p>{formErrors.password}</p>

          <div className="field">
            Tel
            <p><input
              type="tel"
              name="tel"
              placeholder="Tel"
              value={formValues.tel}
              onChange={handleChange}
            /></p>
          </div>
          <p>{formErrors.tel}</p>
          
          <p>Address</p>
          <textarea
          label="Address"
          type="address"
          name="address"
          placeholder="Address"
          value={formValues.address}
          onChange={handleChange}/>
          <p>{formErrors.address}</p>

          <select
          name="gender"
          value={formValues.gender}
          onChange={handleChange}
       >
          <option>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p>{formErrors.gender}</p>
      
        <br/>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>

      {Object.keys(formValues).length > 0 && isSubmit && (
        <div className="submitted-data">
          <pre>{JSON.stringify(formValues, null, 1)}</pre>
        </div>
      )}

    </div>
    
  );
}


export default App