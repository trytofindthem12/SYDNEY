// Function to check if the user's country is supported
function checkSupportedCountry() {
    fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        // Check if the country is not Ireland or Great Britain
        if (data.country !== 'IE' && data.country !== 'GB') {
            // Close all connections and display the message
            window.stop(); // Stop loading the page
            document.body.innerHTML = '<h1>Your region is not supported to access this website.</h1>';
        }
    })
    .catch(error => {
        console.error('Error fetching user country:', error);
    });
}

// Call the function when the page is loaded
window.onload = checkSupportedCountry;

/**
 * Is value numeric
 * 
 * Determine whether variable is a number
 * 
 * @param {*} str 
 *
  import { isNumeric } from '../helpers/general'

  isNumeric(value)
*/
function isNumeric(str) {
  if (['string', 'number'].indexOf(typeof str) === -1) return false; // we only process strings and numbers!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

/**
 * Validate email format
 * 
 * Checks the provided email address and validates its format
 * 
 * @param   {String} email  The email address
 * 
    import { validateEmail } from '../helpers/general'

    validateEmail(email)
 */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate strong password format
 * 
 * 
 * @param   {String} password  The password
 * 
    import { validateStrongPassword } from '../helpers/general'

    validateStrongPassword(email)
 */
function validateStrongPassword(password) {
  return /(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password);
}

/**
 * Checks for empty string
 * 
 * @param   {String} email  input
 * 
    import { isEmpty } from '../helpers/general'

    isEmpty(email)
 */
function isEmpty(input) {
  if (input === '' || input === null || input === undefined) return true;
}

/**
 * Checks if user is authenticated
 * 
 * 
 * 
    import { isAuth } from '../helpers/general'

    isAuth()
 */
function isAuth() {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const token = window.localStorage.getItem('key');
    if (token) return true;
    else return false;
  } else {
    return true;
  }
}

export { isNumeric, validateEmail, validateStrongPassword, isEmpty, isAuth };
