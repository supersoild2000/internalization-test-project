# Internalisation test project

## Application Description

This application serves as an example of how to set up internationalization (i18n) in a React project using TypeScript. It uses i18next for translation and formatting capabilities, providing a localized experience depending on the user's language setting. The application includes several utility functions that demonstrate localized number formatting, date-time formatting, and unit conversions.

The project aims to create a scalable i18n architecture that can be easily expanded with additional locales and functionalities. It showcases several examples, such as translating text, formatting numbers in different locales, formatting date and time in various styles, and even converting units of measurement based on the selected locale.

## Running Locally

To run the application locally, follow the steps below:

1. Clone the repository:
   ```
   git clone https://github.com/supersoild2000/internalization-test-project.git
   ```
2. Navigate to the project directory:
   ```
   cd internalization-test-project
   ```
3. Install dependencies:
   ```
   yarn install
   ```
4. Start the application:
   ```
   yarn start
   ```
   The application should now be running at `http://localhost:3000/`.

## Changing Locale

### Example 1: Using Select Input

1. On the application interface, locate the dropdown that says "Choose Language."
2. Click on it to display the list of available languages (EN, FR, UA).
3. Select the desired language.

### Example 2: Manually Updating Locale

If you are looking to manually change the locale for development purposes:

1. Open the `i18n.ts` file located in the `src` directory.
2. Locate the `i18n.init()` function.
3. Change the `lng` attribute to your desired locale ('en', 'fr', 'ua').
   ```javascript
   i18n.init({
     ...
     lng: 'fr', // Change this to 'en', 'fr', or 'ua'
     ...
   });
   ```
