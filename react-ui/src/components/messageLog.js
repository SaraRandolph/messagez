import React, { Component } from "react";
import axios from "axios";
import {
    Container
  } from 'semantic-ui-react';


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
        <Container>
            <h1 className="">Message Log</h1>
            <div role="list" >
                {this.state.messages.map(message =>
                    <div className="ui celled list">
                        <div className="item" key={message._id}>{message.message}</div>
                        <div className="header">{message.recipient}</div>
                    </div>
                )}
            </div>
        </Container>

        )
	}
}

export default MessageLog;