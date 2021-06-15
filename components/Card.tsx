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
                <Text>{name}</Text>
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
        width: 50 + windowWidth / 12,
        height: 80 + windowHeight / 12,
        borderRadius: 15,
        margin: 5,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 10,
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30 + windowHeight / 15,
        height: 30 + windowHeight / 15,
        borderRadius: 100,
    },
    price: {
        color: '#FA4A0C'
    },
});