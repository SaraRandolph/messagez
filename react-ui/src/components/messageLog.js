import React, { Component } from "react";
import axios from "axios";


class MessageLog extends Component {
	constructor(props) {
		super(props);

        this.state = {
            messages: [],
        };

	}

    componentDidMount() {
        fetch('/messages')
            .then(res => res.json())
            .then(messages => this.setState({ messages: messages }));
}


	render() {
        return (
        <div className="guestdataContainer">
            <h6>Message Log</h6>
            
            {this.state.messages.map(message =>
                <div key={message._id}>{message.message} - FROM:{message.recipient}</div>
              )}
        </div>

        )
	}
}

export default MessageLog;