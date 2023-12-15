import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BookmarkedEventsScreen = () => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState([{
    id: '1',
    title: 'Event 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    title: 'Event 2',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '3',
    title: 'Event 3',
    image: 'https://tinyurl.com/42evm3m3'
  }]);

  const removeBookmark = id => {
    setBookmarkedEvents(bookmarkedEvents.filter(event => event.id !== id));
  };

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={{
      uri: item.image
    }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity style={styles.button} onPress={() => removeBookmark(item.id)}>
        <Text style={styles.buttonText}>Remove</Text>
      </TouchableOpacity>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={bookmarkedEvents} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
export default BookmarkedEventsScreen;