import React, {Component} from 'react';
import FriendoButton from '../components/FriendoButton';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class WelcomePageContainer extends Component {
  constructor(props) {
    super(props);

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
            '#00cccc',
          ]}>
            <View style={styles.welcomePageContainer}> 
                <FriendoButton
                    text="Log In"
                    buttonExternalStyles={styles.buttonExtraStyle}
                    onPressMethod={this.loginHideAndShow}
                />
                <FriendoButton
                    text="Sign Up"
                    buttonExternalStyles={styles.buttonExtraStyle}
                    onPressMethod={this.signupHideAndShow}
                />
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
