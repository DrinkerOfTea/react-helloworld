//Access your JavaScript here!!!

import React from 'react';
import ReactDOM from 'react-dom';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigo500} from 'material-ui/styles/colors';

// Import demo components
import HelloWorld from './helloworld/HelloWorld';
import MessageOfTheDay from './messageoftheday/MessageOfTheDay';

// Needed for onTouchTap
injectTapEventPlugin();

/**
 * Theme styling for the app
 */
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500
    }
});

/**
 * Render the app into the 'app' DOM element, within a Material UI theme
 */
ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <HelloWorld />
    </MuiThemeProvider>,
    document.getElementById("app")
);