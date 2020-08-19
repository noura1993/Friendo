import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: 1597846591000,
                    user: {
                        _id: 2,
                        name: 'React Native',
                    }
                }
            ]
        };

        this.onSend = this.onSend.bind(this);
    }

    onSend(messages) {
        this.setState({ messages: messages.concat(this.state.messages) });
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }
}

export default Chat;