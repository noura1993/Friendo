import React, {Component} from 'react';
import FriendoButton from '../components/FriendoButton';
import {View, StyleSheet, Image, Text} from 'react-native';
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
    this.props.navigation.navigate('AddressFinder');
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
            <Image source={require('../assets/oldlogo.png')} style={styles.logo}/>
            <Text style={styles.logoName}>Friendo</Text>
            <View style={styles.welcomePageContainer}> 
              <FriendoButton
                  text="Log In"
                  buttonExternalStyles={styles.buttonExtraStyle}
                  onPressMethod={this.loginHideAndShow}
              />
              <FriendoButton
                  text="Sign Up"
                  buttonExternalStyles={styles.buttonExtraStyle}
                  onPressMethod={this.signupHideAndShow}>
                    {props => <SignUp {...props} toLogin={loginHideAndShow}/>}
              </FriendoButton>
            </View>
      </LinearGradient >
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    top: 100,
    width: '58%', 
    flex:1,
    zIndex:1,
    alignSelf: "center",
  },
  logoName: {
    top: 100,
    color: 'white',
    fontSize: 40,
    alignSelf: "center",
    fontWeight: 'bold'
  },
  welcomePageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50%'
  },
  buttonExtraStyle: {
    width: '30%',
    top: 80
  },
  linearGradient: {
    flex: 1
  }
});

export default WelcomePageContainer;
