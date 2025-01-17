//for email validation and other utility functions/
//email validation
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // Form field validation
  export function validateField(name, value) {
    if (!value.trim()) {
      return `${name} is required`;
    }
    
    if (name === 'email' && !validateEmail(value)) {
      return 'Please enter a valid email address';
    }
  
    return '';
  }