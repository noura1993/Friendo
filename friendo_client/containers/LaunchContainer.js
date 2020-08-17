import React, { Component } from 'react';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FriendoButton from '../components/FriendoButton';


class LaunchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginVisible: false,
            isSignUpVisible: false
        }

        this.loginHideAndShow = this.loginHideAndShow.bind(this);
        this.signupHideAndShow = this.signupHideAndShow.bind(this);
    }

    loginHideAndShow() {
        this.setState(previousState => ({ isLoginVisible: !previousState.isLoginVisible }))
    }

    signupHideAndShow() {
        this.setState(previousState => ({ isSignUpVisible: !previousState.isSignUpVisible }))
    }
    
      


    render() {
        return (
            <View style={styles.launchContainer}>

                <View>
                    {this.state.isLoginVisible ? <LogIn style={styles.login}/> : null }
                </View>
                
                <View>
                    {this.state.isSignUpVisible ? <SignUp style={styles.signup}/> : null }
                </View>

                <FriendoButton 
                    text="Log In" 
                    buttonExternalStyles={styles.buttonExtraStyle} 
                    onPressMethod={this.loginHideAndShow} />   

                <FriendoButton 
                    text="Sign Up"
                    buttonExternalStyles={styles.buttonExtraStyle} 
                    onPressMethod={this.signupHideAndShow} />
            </View>

        )
    }
} 

const styles = StyleSheet.create({
    launchContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonExtraStyle: {
        width: "30%"
    }
})

export default LaunchContainer;

