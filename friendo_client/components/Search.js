import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.search}>
            <Text>Search!</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    search: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Search;
