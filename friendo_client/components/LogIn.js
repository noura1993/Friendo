import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ApiUrl } from '../ApiUrl';
import t from 'tcomb-form-native';
import FriendoButton from './FriendoButton';
import LinearGradient from 'react-native-linear-gradient';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String
});


class LogIn extends Component {
  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn() {
    const formData = this.refs.form.getValue();
    if (!formData) return;
    // TODO: fetch authentication from backend
    fetch(ApiUrl(`user/${formData.email}`))
      .then((response) => response.json())
      .then((json) => {
        if (json.length > 0) {
          const userInfo = json[0];
          if (userInfo.password === formData.password) {
            this.props.navigation.navigate('FriendoApp', {
              userId: userInfo.id,
              userFirstName: userInfo.firstname,
              userLastName: userInfo.lastname,
              userEmail: userInfo.email,
              userGender: userInfo.gender,
              userAge: userInfo.age,
              userPicture: userInfo.picture
            });
          } else {
            alert("Incorrect email or password");
          }
        } else {
          alert("Incorrect email");
        }
      })
      .catch((error) => console.error(error))
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

export default LogIn;
