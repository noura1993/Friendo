import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import t from 'tcomb-form-native';
// import PasswordInputText from 'react-native-hide-show-password-input';
import FriendoButton from './FriendoButton';

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String
});

class LogIn extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     password: ''
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>

        <Form ref={(c) => (this._form = c)} type={User} />
        {/* <PasswordInputText
          value={this.state.password}
          onChangeText={ (password) => this.setState({ password }) } /> */}

        <FriendoButton
          text="Log In!"
          buttonExternalStyles={styles.buttonExtraStyle}
          onPressMethod={this.handleSubmit}
        />
        <FriendoButton
          text="Back"
          buttonExternalStyles={styles.buttonExtraStyle}
          onPressMethod={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
  },
  buttonExtraStyle: {
    width: "100%"
}
});

export default LogIn;
