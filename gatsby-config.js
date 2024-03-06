module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Sydney Ecommerce Theme`,
        short_name: `Sydney`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
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
