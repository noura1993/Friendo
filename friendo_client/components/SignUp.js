import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import FriendoButton from './FriendoButton';
import LinearGradient from 'react-native-linear-gradient';

// import { useForm } from "react-hook-form";

const Form = t.form.Form;

const User = t.struct({
    firstName: t.String,
    lastName: t.String,
    email: t.String,
    password: t.String,
    confirmPassword: t.String,
    gender: t.enums({
      'Male': "Male",
      'Female': "Female"
    }, 'gender'),
    age: t.enums({ 
      '18-25': "18-25",
      '25-35': "25-35",
      '35-45': "35-45",
      '45-55': "45-55",
      '55-65': "55-65",
      '65+': "65+"
    }, 'age')
});

export default SignUp = (props) => {
  const onSubmit = () => {
    props.submitFunction(this._form.getValue());
    props.navigation.navigate('Home');
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  
  //render() {
    return (
      <LinearGradient
          style={styles.linearGradient}
          colors={[
            '#668cff',
            '#00cccc'
          ]}>
      <View style={styles.container}>
        <Form  
          ref={c => this._form = c}
          type={User} 
          options={options} 
        />
        <FriendoButton
          text="Submit!"
          buttonExternalStyles={styles.buttonExtraStyle} 
          onPressMethod={onSubmit} 
          />
      </View>
      </LinearGradient>
    )
  //}
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 30,
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
    }
  },
  pickerContainer: {
    normal: {
      backgroundColor: '#fff',
      borderRadius: 4,
    }
  }
}


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

// export default SignUp;
