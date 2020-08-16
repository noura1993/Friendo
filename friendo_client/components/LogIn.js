import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import t from 'tcomb-form-native';


const Form = t.form.Form;

const User = t.struct({
    username: t.String,
    password: t.String,
});

class LogIn extends Component {

    render() {
        return (
             <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
        />

      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
  });

export default LogIn;