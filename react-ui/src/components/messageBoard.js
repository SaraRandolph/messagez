import React, { Component } from "react";
import axios from "axios";



class MessageSend extends Component {
	constructor(props) {
		super(props);

        this.state = {
            recipient: "",
            message: "",
        };

	}

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post("/message", {
            recipient: this.state.recipient,
            message: this.state.message
        }) 
        .then(response => {
        console.log(response, 'message recieved!');
        }) 
        .catch(err => {
        console.log(err, 'message not recieved, try again');
        });

        this.setState({
            recipient: "",
            message: ""
        })


    }

	render() {
        return(
            <div>
                 <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            name="recipient"
                            className="form-control"
                            value={this.state.recipient}
                            onChange={this.onChange}
                            
                            placeholder="Enter the email of who you want to send your message to"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            className="form-control"
                            value={this.state.message}
                            onChange={this.onChange}
                            placeholder="Type a message"
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        )
	}
}

export default MessageSend;