export const loginvalidator = (values) => {
    let errors = {};
    let isvalid = true;
    if (!values.password) {
      errors.password = "Cannot be blank";
      isvalid = false
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
      isvalid = false
    }
    if(!values.username){
      errors.username = "User Name cannot be empty"
      isvalid = false;
    }
    return [errors, isvalid];
  };

  

  export const signupvalidator = (values) => {
    let errors = {};
    let isvalid = true;
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