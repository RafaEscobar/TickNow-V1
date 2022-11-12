import { Avatar, Box, FlatList, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export const ListPage = () => {
    
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let cont=1;

  const getData = async () => {
     try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    //   const response = await fetch('https://jsonplaceholder-typicode-com.translate.goog/comments?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es-419&_x_tr_pto=sc');

    //   const response = await fetch('https://jsonplaceholder-typicode-com.translate.goog/posts?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es-419&_x_tr_pto=sc');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    cont=1;
    getData();
  }, []);

  return (
    
    <View style={{ flex: 1, padding: 14 }}>
    {isLoading ? <ActivityIndicator/> : (
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
            <Box style={ styles.container }>
              
              <Avatar size="60px" source={{ uri: item.thumbnailUrl }} />
                <Box style={ styles.subContainer }>
                <Text style={ styles.myId }> ID: {item.id} </Text>
                <Text style={ styles.myTitle && styles.myText1}> Titulo: {item.title} </Text>
                </Box>
              

                
            </Box>
        )}
      />
    )}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: 8,
    height: 80,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    padding: 10,
  },
  subContainer: {
    marginLeft: 10,
  },
    myId: {
        fontSize: 20,
        color: 'black'
    },
    myTitle: {
        fontSize: 15,
        color: 'black',
        textAlign: 'left'
    },
    myText1: {
      width: 250,
    }

})