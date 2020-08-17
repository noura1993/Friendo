import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class HomePageContainer extends Component {
  constructor(props) {
    super(props);

    this.loginHideAndShow = this.loginHideAndShow.bind(this);
  }

  loginHideAndShow() {
    this.props.navigation.navigate('LogIn');
  }

  render() {
    return (
        <View style={styles.homePageContainer}> 
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    homePageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomePageContainer;
