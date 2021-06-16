import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import primaryColor from '../constants/colors'

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
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    price: {
        color: primaryColor,
        fontWeight: 'bold',
        fontSize: 17
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 10
    },
    textContainer: {
        position: 'absolute',
        bottom: 15,
        alignItems: 'center',
    },
    imageContainer: {
        position: 'absolute',
        top: -10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 100,
        elevation: 8,
        borderRadius: 100,
    }
});

export default styles;