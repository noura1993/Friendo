import React, { useEffect, useState, Fragment } from 'react';
import { Text, View, ActivityIndicator, FlatList, Image, StyleSheet, Animated } from 'react-native';
import { ApiUrl } from './ApiUrl';

const Friendo = () => {
  const [isLoading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [interests, setInterests] = useState([{}]);

  accessAPI = (endpointName, setter) => {
    fetch(ApiUrl(endpointName))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setter(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    accessAPI('users', setUsersList)
    accessAPI('interests', setInterests)
  }, []);

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50
    }
  });


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello Bambino</Text>
      {
        isLoading ?
          <ActivityIndicator />
          : (
            <Fragment>
              <FlatList
                data={usersList}
                keyExtractor={({ id }, index) => id.toString()}
                renderItem={({ item }) => (
                  <Fragment>

                    <Text>{item.firstname}</Text>

                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: item.picture
                      }}
                    />

                  </Fragment>
                )}
              />

            </Fragment>
          )
      }
    </View>
  )
}
export default Friendo;


