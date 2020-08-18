import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ActivityIndicator, FlatList } from 'react-native';

const Friendo = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
     fetch('http://10.0.2.2:8000/users')
      .then((response) => response.json())
      .then((json) => { 
        console.log(json);
      setData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello Bambino, xxxyz</Text>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
          )}
        />
      )}
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
