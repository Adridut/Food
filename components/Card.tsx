import * as React from 'react';
import { Image, Text, View  } from 'react-native';

import styles from './CardsStyle'



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
