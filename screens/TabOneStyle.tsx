import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      marginTop: 50,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      margin: 10
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
    }
  });

  export default styles;
  