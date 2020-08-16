import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native';


const Form = t.form.Form;

const User = t.struct({
    firstName: t.String,
    lastName: t.String,
    age: t.Integer,
    username: t.String,
    password: t.String,
    confirmPassword: t.String
});

class SignUp extends Component {

    render() {
        return (
             <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
        />
        <Button
          title="Confirm Details!"
          onPress={this.handleSubmit}
        />
        <Button
          title="Back"
          onPress={this.handleSubmit}
        />
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
  });

export default SignUp;