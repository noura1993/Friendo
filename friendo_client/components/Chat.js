import React, { Component } from 'react'
import { ApiUrl } from '../ApiUrl'
import { GiftedChat } from 'react-native-gifted-chat'

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            intervalId: null,
            messages: [
                // {
                //     text: 'Hello developer',
                //     createdAt: 1597846591000,
                //     user: {
                //         _id: 2,
                //         name: 'React Native'
                //     }
                // }
            ]
        };

        this.onSend = this.onSend.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
    }

    updateMessages() {
        fetch(ApiUrl('messages/' + this.props.route.params.senderEmail + '/' + this.props.route.params.receiverEmail))
            .then((response) => response.json())
            .then((json) => {
                const newMessages = json.map((newMessage) => {
                    return {
                        _id: newMessage.id,
                        text: newMessage.body,
                        createdAt: parseInt( newMessage.timestamp),
                        user: {
                            name: newMessage.sendername,
                            _id: (newMessage.receivername == this.props.route.params.receiverName) ? 1 : 2
                        }
                    }
                });
                this.setState({ messages: newMessages })
            })
            .catch((error) => console.error(error))
    }

    componentDidMount() {
        this.updateMessages();

        // TODO: Handle this properly
        const intervalId = setInterval(() => this.updateMessages(), 500);
        this.setState({ intervalId: intervalId});
    }

    componentWillUnmount() {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
      }

    onSend(messages) {
        fetch(ApiUrl('messages/'), {
            method: 'POST',
            body: JSON.stringify({
                senderEmail: this.props.route.params.senderEmail,
                receiverEmail: this.props.route.params.receiverEmail,
                senderName: this.props.route.params.senderName,
                receiverName: this.props.route.params.receiverName,
                timestamp: new Date().getTime(),
                body: messages[0].text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
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