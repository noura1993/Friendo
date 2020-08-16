import React, { Component } from 'react';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import { Platform, View, StyleSheet, Button } from 'react-native';


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

                <Button title="Log In" onPress={this.loginHideAndShow} />
                <Button title="Sign Up" onPress={this.signupHideAndShow} />
                
            </View>

        )
    }
} 

const styles = StyleSheet.create({
    launchContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
    
})

export default LaunchContainer;

