/**
 * Simplest possible React component!
 */
import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import ChangeMessageDialog from './ChangeMessageDialog';

class MessageOfTheDay extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            message: "Hello World!",
            showDialog: false
        };
    }

    /**
     * Render the component
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <h1>Message of the Day</h1>

                <p style={{
                        fontSize: 36,
                        marginTop: 30,
                        marginBottom: 30,
                        border: "solid",
                        borderColor: "lightgrey"
                    }}>
                    {this.state.message}
                </p>

                <RaisedButton label="Change message"
                              primary={true}
                              onTouchTap={ this.changeMessageClicked.bind(this) } />

                <ChangeMessageDialog open={this.state.showDialog} onMessageChosen={ this.changeMessage.bind(this) } />

            </div>
        );
    }

    changeMessageClicked() {
        this.setState({
            showDialog: true
        })
    }

    changeMessage(newMessage) {
        this.setState({
            showDialog: false,
            message: newMessage
        });
    }

}

export default MessageOfTheDay;