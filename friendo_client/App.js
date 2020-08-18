import React, { useEffect, useState, Fragment } from 'react';
import { Text, View, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native';

const Friendo = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/users')
      //  fetch('http://10.0.2.2:8000/users')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
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
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id.toString()}
              renderItem={({ item }) => (
                <Fragment>

                  <Text>{item.name}</Text>

                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: item.picture
                    }}
                  />

                </Fragment>
              )}
            />
          )
      }
    </View>
  )
}
export default Friendo;

/*
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
};
*/
