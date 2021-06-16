import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 150,
        height: 180,
        borderRadius: 15,
        margin: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 8,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    price: {
        color: '#FA4A0C',
        fontWeight: 'bold',
    },
    name: {
        fontWeight: 'bold',
    },
});

export default styles;