/**
 * Simplest possible React component!
 */
import React from 'react';

// Material UI
import SmileyFaceIcon from 'material-ui/svg-icons/social/mood';


class Homepage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    /**
     * Render the component
     */
    render() {
        return (
            <div>
                <h1>React Knowledge Nugget</h1>
                <p>Hello World!</p>
                <SmileyFaceIcon style={{ color: "orange", width: 300, height: 300 }}
                                hoverColor="blue" />
            </div>
        );
    }
}

export default Homepage;