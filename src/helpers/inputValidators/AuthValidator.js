export default function validate(input) {
    let errors = {};

    if (!input.username) errors.username = 'Username required';
    else if (input.username.length<5) errors.username = <span>Your username must contain at least <span style={{color:'red'}}>5 characters</span></span>;
    
    if (!input.email) errors.email = 'Email required';
    else if (!/\S+@\S+\.\S+/.test(input.email)) errors.email = 'Please enter a valid email';

    // /(?=.*\d).{8,}$/ matches asdasda1
    if (!input.password) errors.password = 'You must write a password';
    else{
      if(!/.{8,}$/.test(input.password)) {
        errors.passwordRequiredLength = '8 characters'
        errors.password='This must contain at least'
      }
  
      if(!/\d/.test(input.password)) {
        errors.passwordIncludesNumber = '1 number'
        errors.password='This must contain at least'
      }
    }

    if(input.password!==input.confirmPassword) errors.confirmPassword='Your passwords don\'t match'
    
    return errors
  };