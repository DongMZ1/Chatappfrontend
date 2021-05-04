export const loginvalidator = (values) => {
    let errors = {};
    let isvalid = true;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.email) {
      errors.email = "Cannot be blank";
      isvalid = false;
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
      isvalid = false;
    }
    if (!values.password) {
      errors.password = "Cannot be blank";
      isvalid = false
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
      isvalid = false
    }
    return [errors, isvalid];
  };

  

  export const signupvalidator = (values) => {
    let errors = {};
    let isvalid = true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Cannot be blank";
      isvalid = false;
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
      isvalid = false;
    }
    if (!values.password) {
      errors.password = "Cannot be blank";
      isvalid = false
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
      isvalid = false
    }
    if(values.password !== values.password1){
      errors.password = "Password Must Be Matching"
      isvalid =false
    }
    if(!values.username){
      errors.username = "User Name cannot be empty"
      isvalid = false;
    }

    return [errors, isvalid];
  };