import React, { Component } from 'react';
import AwesomeChat from 'react-native-awesome-chat';
import { View, StatusBar, SafeAreaView } from 'react-native';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages : [
                {body : "Hello", 
                id : 3,
                timestamp : 1581418856, 
                type : "sent", 
                image_uri : ""
            },
                {body : "Hi",
                id : 5, 
                timestamp : 1581418856,
                type : "received",
                image_uri : ""}
            ]
        }
    }

    sendMessage = async (message) => {
        let response = await axios.post(/*POST request to your DB*/)
        if(response.ok){
            return true;  
        } else {
            return false; //AwesomeChat will flag the message as unsent
        }
    }
 
    render(){
        return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
            <View style={{height : '100%'}}>
                <AwesomeChat 
                    onSendMessage={this.sendMessage} 
                    messages={this.state.messages}
                    //If new messages come in, just update this.state.messages
                />
            </View>
            </SafeAreaView>
        </>
        );
    }

};

export default Chat;