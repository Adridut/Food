import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

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
      color: '#9A9A9D'
    },
    selectedFilter: {
      color: '#FA4A0C',
      margin: 8,
      borderBottomColor: '#FA4A0C',
      borderBottomWidth: 3
    },
    searchContainer: {
      height: 40,
      width: 30 + windowWidth / 2,
      backgroundColor: '#EFEEEE',
      borderRadius: 30,
      padding: 10,
      flexDirection: 'row',
      margin: 10
    },
    image: {
      width: 20,
      height: 20,
      marginRight: 5
    },
    scroll: {
      flexGrow: 0,
      margin: 10,
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
      color: '#FA4A0C'
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
    }
  });

  export default styles;
  