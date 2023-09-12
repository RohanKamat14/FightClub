function isStrongPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      console.log("No good. Password must be at least 8 characters long.");
      return false;
    }
  
    // Check if the password contains the substring "password" (case-insensitive)
    if (password.toLowerCase().includes("password")) {
      console.log("No good. Password cannot contain the word 'password'.");
      return false;
    }
  
    // Check if the password contains at least one digit
    let hasDigit = false;
    for (let i = 0; i < password.length; i++) {
      const charCode = password.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        hasDigit = true;
        break;
      }
    }
  
    if (!hasDigit) {
      console.log("No good. Password must contain at least one digit.");
      return false;
    }
  
    // If all conditions are met, return true
    console.log("Good Password!")
    return true;
  }
  
  isStrongPassword("qwerty1"); // false - Too short
  isStrongPassword("qwertypassword1") // false - Contains "password"
  isStrongPassword("qwertyABC") // false - No numbers
  isStrongPassword("qwerty123") // true