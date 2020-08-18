import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import t from 'tcomb-form-native';
import FriendoButton from './FriendoButton';
import LinearGradient from 'react-native-linear-gradient';


const Form = t.form.Form;

const User = t.struct({
    firstName: t.String,
    lastName: t.String,
    email: t.String,
    password: t.String,
    confirmPassword: t.String,
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
});

class SignUp extends Component {

  render() {
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
          onPressMethod={this.handleSubmit} />
      </View>
      </LinearGradient>
    )
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
      }
    },
    pickerContainer: {
      normal: {
        backgroundColor: '#fff',
        borderRadius: 4,
        // height: 32
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

export default SignUp;
