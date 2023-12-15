import { StyleSheet } from 'react-native';
const eventsData = [{
  id: '1',
  title: 'Event 1',
  date: '2022-01-01',
  location: 'Location 1'
}, {
  id: '2',
  title: 'Event 2',
  date: '2022-02-02',
  location: 'Location 2'
} // Add more events here
];

const EventScreen = () => {
  return;
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  details: {
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 14,
    color: '#888'
  },
  location: {
    fontSize: 14,
    color: '#888'
  }
});
export default EventScreen;