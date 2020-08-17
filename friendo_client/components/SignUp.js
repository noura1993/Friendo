import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import t from 'tcomb-form-native';
import FriendoButton from './FriendoButton';


const Form = t.form.Form;

const User = t.struct({
    firstName: t.String,
    lastName: t.String,
    gender: t.enums({
      male: "Male",
      female: "Female"
    }, 'gender'),
    age: t.enums({ 
      firstSection: "18-25",
      seconedSection: "25-35",
      thirdSection: "35-45",
      fourthSection: "45-55",
      fifthSection: "55-65",
      sixthSection: "65+"
    }, 'age'),
    email: t.String,
    password: t.String,
    confirmPassword: t.String
});

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
  }
};

class SignUp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options} 
        />
        <FriendoButton
          text="Submit!"
          buttonExternalStyles={styles.buttonExtraStyle} 
          onPressMethod={this.handleSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20
    },
    buttonExtraStyle: {
      width: "100%"
    }
  });

export default SignUp;