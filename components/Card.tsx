import * as React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './CardsStyle'



export default function Card({ name, price }: { name: string, price: string }) {
    return (
        <View>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/images/salmon.png')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name} numberOfLines={1}>{name}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </View>
        </View>
    );
}
