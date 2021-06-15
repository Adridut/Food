import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TextInput } from 'react-native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;


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
  const [searching, setSearching] = useState(false);



  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Delicious food for you</Text>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Image style={styles.image} source={require('../assets/images/search.png')}
          />
          <TextInput
            style={{ width: '90%' }}
            onChangeText={setSearch}
            value={search} placeholder="Search..."
            onFocus={() => setSearching(true)}
            onEndEditing={() => setSearching(false)}
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
  }
});
