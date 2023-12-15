import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const AttendanceCancellationScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Event Name</Text>
      </View>
      <Text style={styles.description}>
        You have previously RSVP'd to this event. If you can no longer attend, please cancel your attendance to allow others the opportunity to join.
      </Text>
      <Button title="Cancel Attendance" color="#841584" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  }
});
export default AttendanceCancellationScreen;