/**
 * Simplest possible React component!
 */
import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import Dialog from 'material-ui/Dialog';


class ChangeMessageDialog extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        }
    }

    /**
     * Render the component
     * @returns {XML}
     */
    render() {
        return (
            <Dialog modal={true}
                    open={this.props.open}
                    onRequestClose={this.props.onMessageChosen}>
                <p>What is the new message?</p>
                <div style={{ marginBottom: 20 }}>
                    <input type="text"
                           style={{ height: 30, width: 400, fontSize: 24 }}
                           ref= { (el) => this.messageInput = el }
                    />
                </div>
                <RaisedButton secondary={true}
                              label="Set message"
                              onTouchTap={this.chooseMessage.bind(this)} />
            </Dialog>
        );
    }

    chooseMessage() {
        let message = this.messageInput.value;
        this.props.onMessageChosen(message);
    }
}

ChangeMessageDialog.PropTypes = {
    open:            React.PropTypes.bool.required,
    onMessageChosen: React.PropTypes.func
}

export default ChangeMessageDialog;