import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View, Image, TextInput } from 'react-native';


import styles from './TabOneStyle'

import Card from '../components/Card';

const DATA = [
  {
    name: 'mojito',
    type: 'drink',
    price: '8€',
    id: 0
  },
  {
    name: 'salmon',
    type: 'food',
    price: '28€',
    id: 1
  },
  {
    name: 'chips',
    type: 'snack',
    price: '2€',
    id: 2
  },
  {
    name: 'fries',
    type: 'snack',
    price: '3€',
    id: 3
  },
  {
    name: 'ketchup',
    type: 'sauce',
    price: '0.5€',
    id: 4
  },
  {
    name: 'mojito',
    type: 'drink',
    price: '8€',
    id: 5
  },
  {
    name: 'salmon',
    type: 'food',
    price: '28€',
    id: 6
  },
  {
    name: 'chips',
    type: 'snack',
    price: '2€',
    id: 7
  },
  {
    name: 'fries',
    type: 'snack',
    price: '3€',
    id: 8
  },
  {
    name: 'ketchup',
    type: 'sauce',
    price: '0.5€',
    id: 9
  },
  {
    name: 'mojito',
    type: 'drink',
    price: '8€',
    id: 10
  },
  {
    name: 'salmon',
    type: 'food',
    price: '28€',
    id: 11
  },
  {
    name: 'chips',
    type: 'snack',
    price: '2€',
    id: 12
  },
  {
    name: 'fries',
    type: 'snack',
    price: '3€',
    id: 13
  },
  {
    name: 'ketchup',
    type: 'sauce',
    price: '0.5€',
    id: 14
  },
]



export default function TabOneScreen() {

  const [filter, setFilter] = useState('food');
  const [search, setSearch] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Delicious food for you</Text>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Image style={styles.image} source={require('../assets/images/search.png')}
          />
          <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search} placeholder="Search..."
          ></TextInput>
        </View>
        <ScrollView horizontal style={styles.scroll} showsHorizontalScrollIndicator={false}>
          <Text style={[filter == 'food' ? styles.selectedFilter : styles.filter]} onPress={() => setFilter('food')}>Foods</Text>
          <Text style={[filter == 'drink' ? styles.selectedFilter : styles.filter]} onPress={() => setFilter('drink')}>Drinks</Text>
          <Text style={[filter == 'snack' ? styles.selectedFilter : styles.filter]} onPress={() => setFilter('snack')}>Snacks</Text>
          <Text style={[filter == 'sauce' ? styles.selectedFilter : styles.filter]} onPress={() => setFilter('sauce')}>Sauces</Text>
        </ScrollView>
        <ScrollView horizontal style={styles.scroll} showsHorizontalScrollIndicator={false}>
          {DATA.filter(value => value.type == filter && value.name.includes(search)).map((value, index = value.id) => {
            return <Card name={value.name} price={value.price}></Card>
          })}
        </ScrollView>
      </View>
    </View>
  );
}

