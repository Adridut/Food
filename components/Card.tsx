import * as React from 'react';
import { StyleSheet, Image, Text, View  } from 'react-native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Card({ name, price }: { name: string, price: string }) {
    return (
        <View>
            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/images/salmon.png')}
                />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 80 + windowWidth / 6,
        height: 80 + windowHeight / 6,
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
        width: 30 + windowHeight / 10,
        height: 30 + windowHeight / 10,
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