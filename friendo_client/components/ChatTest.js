import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import t from 'tcomb-form-native';
import FriendoButton from './FriendoButton';
import LinearGradient from 'react-native-linear-gradient';

const Form = t.form.Form;

const ChatForm = t.struct({
  senderName: t.String,
  senderEmail: t.String,
  receiverName: t.String,
  receiverEmail: t.String
});


class ChatTest extends Component {
  constructor(props) {
    super(props);

    this.startChat = this.startChat.bind(this);
  }

  startChat() {
    const formData = this.refs.form.getValue();
    if (!formData) return;

    this.props.navigation.navigate('Chat', {
        senderEmail: formData.senderEmail,
        receiverEmail: formData.receiverEmail,
        senderName: formData.senderName,
        receiverName: formData.receiverName
     })
  }

  render() {
    return (
      <LinearGradient
      style={styles.linearGradient}
      colors={[
        '#ff6666',
        '#df80ff'
      ]}>
      <View style={styles.container}>
        <Form 
          ref='form'
          type={ChatForm}
          options={options} 
        />   
        <FriendoButton
          text="Start chat!"
          buttonExternalStyles={styles.buttonExtraStyle}
          onPressMethod={this.startChat}
        />
      </View>
      </LinearGradient >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    marginRight: 50,
    marginLeft: 50,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 20
  },
  buttonExtraStyle: {
    width: "100%"
  },
  linearGradient: {
    flex: 1
  }
});

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: 'white',
      fontSize: 14
    },
    error: {
      color: 'red',
      fontSize: 14
    },
  },
  textbox: {
    normal: {
      color: 'black',
      height: 32,
      padding: 7,
      borderRadius: 4,
      borderWidth: 0,
      marginBottom: 5,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white'
    },
    error: {
        color: 'black',
        height: 32,
        padding: 7,
        borderRadius: 4,
        borderWidth: 0,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white'
    }
  }
};

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    },
    confirmPassword: {
      password: true,
      secureTextEntry: true
    }
  },
  stylesheet: formStyles
};

export default ChatTest;
