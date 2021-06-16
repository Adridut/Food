import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faShoppingCart, faHome, faUser, faHeart, faHistory, faSearch } from '@fortawesome/free-solid-svg-icons'


import styles from './TabOneStyle'

import Card from '../components/Card';

const DATA = [
  {
    name: 'Mojito',
    type: 'drink',
    price: '8€',
    id: 0
  },
  {
    name: 'Salmon',
    type: 'food',
    price: '28€',
    id: 1
  },
  {
    name: 'Chips',
    type: 'snack',
    price: '2€',
    id: 2
  },
  {
    name: 'Fries',
    type: 'snack',
    price: '3€',
    id: 3
  },
  {
    name: 'Ketchup',
    type: 'sauce',
    price: '0.5€',
    id: 4
  },
  {
    name: 'Water',
    type: 'drink',
    price: '1€',
    id: 5
  },
  {
    name: 'Salad',
    type: 'food',
    price: '8€',
    id: 6
  },
  {
    name: 'Bread',
    type: 'snack',
    price: '2€',
    id: 7
  },
  {
    name: 'Peanuts',
    type: 'snack',
    price: '2€',
    id: 8
  },
  {
    name: 'Mustard',
    type: 'sauce',
    price: '0.5€',
    id: 9
  },
  {
    name: 'Apple juice',
    type: 'drink',
    price: '3€',
    id: 10
  },
  {
    name: 'Sushis',
    type: 'food',
    price: '15€',
    id: 11
  },
  {
    name: 'Orange juice',
    type: 'drink',
    price: '3€',
    id: 12
  },
  {
    name: 'Nuggets',
    type: 'snack',
    price: '4€',
    id: 13
  },
  {
    name: 'Mayo',
    type: 'sauce',
    price: '0.5€',
    id: 14
  },
]



export default function TabOneScreen() {

  const [filter, setFilter] = useState('food');
  const [search, setSearch] = useState('');

  return (
    <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      enabled={Platform.OS === "ios" ? true : false}>
      <View style={styles.iconsTop}>
        <FontAwesomeIcon icon={faBars} style={styles.menu} />
        <FontAwesomeIcon icon={faShoppingCart} style={styles.cart} />
      </View>
      <Text style={styles.title}>Delicious food for you</Text>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} style={[search != '' ? styles.search : styles.image]} />
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
          return <Card name={value.name} price={value.price} key={value.id}></Card>
        })}
      </ScrollView>
      <View style={styles.bottomIcons}>
        <FontAwesomeIcon icon={faHome} style={styles.homeIcon} />
        <FontAwesomeIcon icon={faHeart} style={styles.icons} />
        <FontAwesomeIcon icon={faUser} style={styles.icons} />
        <FontAwesomeIcon icon={faHistory} style={styles.icons} />
      </View>
    </KeyboardAvoidingView>
  );
}

