import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import t from 'tcomb-form-native';
import FriendoButton from './FriendoButton';
import LinearGradient from 'react-native-linear-gradient';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String
});

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn() {
    this.props.navigation.navigate('Home');
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
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
          ref={(c) => (this._form = c)} 
          type={User}
          options={options} 
        />   
        <FriendoButton
          text="Log In!"
          buttonExternalStyles={styles.buttonExtraStyle}
          onPressMethod={this.handleLogIn}
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
    
  },
  buttonExtraStyle: {
    width: "100%"
},
linearGradient: {
  flex: 1
}
});

export default LogIn;
