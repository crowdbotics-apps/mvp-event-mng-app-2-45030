import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const EventBookingScreen = () => {
  const eventDetails = {
    title: 'Music Concert',
    date: '25th December, 2022',
    location: 'Madison Square Garden, New York',
    description: 'Join us for a night of amazing music and fun!',
    image: 'https://tinyurl.com/42evm3m3'
  };
  return <SafeAreaView style={styles.container}>
      <Image source={{
      uri: eventDetails.image
    }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{eventDetails.title}</Text>
        <Text style={styles.date}>{eventDetails.date}</Text>
        <Text style={styles.location}>{eventDetails.location}</Text>
        <Text style={styles.description}>{eventDetails.description}</Text>
      </View>
      <Button title="Book Now" color="#841584" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  date: {
    fontSize: 18,
    marginBottom: 10
  },
  location: {
    fontSize: 18,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  }
});
export default EventBookingScreen;