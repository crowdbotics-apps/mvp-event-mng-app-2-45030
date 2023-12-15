import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image, Alert } from 'react-native';

const EventScreen = () => {
  const [rsvp, setRsvp] = useState(false);

  const handleRSVP = () => {
    setRsvp(true);
    Alert.alert('Success', 'You have successfully RSVPed to the event. It has been added to your calendar.');
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.eventContainer}>
        <Image style={styles.eventImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.eventTitle}>Event Title</Text>
        <Text style={styles.eventDescription}>Event Description</Text>
        <Button title={rsvp ? 'RSVPed' : 'RSVP to this event'} onPress={handleRSVP} disabled={rsvp} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  eventContainer: {
    flex: 1,
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  eventDescription: {
    fontSize: 16,
    marginTop: 10
  }
});
export default EventScreen;