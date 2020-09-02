import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charsRemaining: 280
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }


  handleCharsRemaining = event => {
      let newChars = this.props.maxChars - this.state.message.length
      this.setState({
        charsRemaining: newChars
      })
  }



  render() {
    return (
      <div>
        <strong>Your message: </strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleMessageChange(event)}
          onKeyPress={event => this.handleCharsRemaining(event)}
          value={this.state.message} />
        <strong> {this.state.charsRemaining} chararcters remaining </strong>
      </div>
    );
  }
}

export default TwitterMessage;
