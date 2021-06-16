import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import primaryColor from '../constants/colors'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 20
  },
  filter: {
    margin: 8,
    color: '#9A9A9D',
    fontSize: 17
  },
  selectedFilter: {
    color: primaryColor,
    margin: 8,
    borderBottomColor: primaryColor,
    borderBottomWidth: 3,
    fontSize: 17
  },
  searchContainer: {
    height: 40,
    width: 30 + windowWidth / 2,
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    padding: 10,
    flexDirection: 'row',
    margin: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  image: {
    marginRight: 5
  },
  search: {
    marginRight: 5,
    color: primaryColor
  },
  scroll: {
    flexGrow: 0,
    margin: 10,
    marginBottom: 15,
    marginTop: 15
  },
  input: {
    width: '90%',
  },
  icons: {
    margin: 20,
    color: '#ADADAF',
  },
  homeIcon: {
    margin: 20,
    color: primaryColor
  },
  iconsTop: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '75%'
  },
  cart: {
    position: 'absolute',
    right: 0,
    color: '#ADADAF'
  },
  menu: {
    position: 'absolute',
    left: 0
  },
  bottomIcons: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
});

export default styles;
