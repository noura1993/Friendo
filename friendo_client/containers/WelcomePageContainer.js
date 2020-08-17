import React, {Component} from 'react';
import LogIn from '../components/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../components/SignUp';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import FriendoButton from '../components/FriendoButton';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';


class WelcomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginVisible: false,
      isSignUpVisible: false,
    };

    this.loginHideAndShow = this.loginHideAndShow.bind(this);
    this.signupHideAndShow = this.signupHideAndShow.bind(this);
  }

  loginHideAndShow() {
    this.props.navigation.navigate('LogIn');
  }

  signupHideAndShow() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
        <LinearGradient
          style={styles.linearGradient}
          colors={[
            '#ff6666',
            '#df80ff',
            '#668cff',
            '#66ffff',
          ]}>
      <View style={styles.welcomePageContainer}>
        <View>
          {this.state.isLoginVisible ? <LogIn style={styles.login} /> : null}
        </View>

        <View>
          {this.state.isSignUpVisible ? <SignUp style={styles.signup} /> : null}
        </View>

        {this.state.isLoginVisible || this.state.isSignUpVisible ? null : (
          <FriendoButton
            text="Log In"
            buttonExternalStyles={styles.buttonExtraStyle}
            onPressMethod={this.loginHideAndShow}
          />
        )}

        {this.state.isLoginVisible || this.state.isSignUpVisible ? null : (
          <FriendoButton
            text="Sign Up"
            buttonExternalStyles={styles.buttonExtraStyle}
            onPressMethod={this.signupHideAndShow}
          />
        )}

     
      </View>
      </LinearGradient >
    );
  }
}

const styles = StyleSheet.create({
  welcomePageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonExtraStyle: {
    width: '30%',
  },
  linearGradient: {
    flex: 1
  }
});

export default WelcomePageContainer;
