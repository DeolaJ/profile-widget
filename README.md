# Profile Widget

This is a simple widget for profile onboarding.

The project was built with `Vite` and `React`

## Instructions

### Getting Started

    git clone https://github.com/deolaj/profile-widget.git
    cd profile-widget
    npm install

### Development

To run the local server,

    npm run dev

`Prettier`, `Typescript`, and `Eslint` libraries are used for formating and error checking. Install their corresponding vscode extensions to use with VSCode.

### Test

Some unit and integration tests were written using `Jest` and `React testing library`. These tests were not as extensive because of the timeframe, but are sufficient to test the basic functionality.

To run these tests

    npm run test

### Production

To generate build files for production,

    npm run build

## Additional Comments

- Chakra UI was used to style for speed, but I had to make custom changes to fit the given UI
- React query was used to manage server state which wasn't changing in this case
- Types were created to fit the mock data

## Improvised additions

- Added hover state to both Group names and Tasks to improve the visual experience
- Added some animation to improve the experience too
- All tests are in the `src/tests` folder, only for easy navigation of the components directory
