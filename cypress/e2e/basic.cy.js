describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h2')
    .contains('Essentials for a cold winter');
  })
}) 
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
