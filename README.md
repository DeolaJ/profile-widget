# Profile Widget

Widget for profile onboarding.

## Instructions

### Getting Started

    git clone https://github.com/deolaj/profile-widget.git
    cd profile-widget
    npm install

### Development

To run the local server,

    npm run dev

`prettier`, `typescript`, and `eslint` libraries are used for formating and error checking. Install their corresponding vscode extensions to use with VSCode.

### Production

To generate build files for production,

    npm run build

## Additional Comments

- Chakra UI was used for styling for speed, but I had to make custom changes to fit the given UI.
- React query was used to manage server state which wasn't changing in this case
- Types were created to fit the mock data.

## Improvised additions

- Added hover state to both Group name and Task to improve the visual experience
- Added some animation to improve the experience too
