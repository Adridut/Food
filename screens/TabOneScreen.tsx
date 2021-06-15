import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TextInput } from 'react-native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import Card from '../components/Card';

const DATA = [
  {
    name: 'mojito',
    type: 'drink',
    price: '8€',
    id: '0'
  },
  {
    name: 'salmon',
    type: 'food',
    price: '28€',
    id: '1'
  },
  {
    name: 'chips',
    type: 'snack',
    price: '2€',
    id: '2'
  },
  {
    name: 'fries',
    type: 'snack',
    price: '3€',
    id: '3'
  },
  {
    name: 'ketchup',
    type: 'sauce',
    price: '0.5€',
    id: '4'
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
          <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require('../assets/images/search.png')}
          />
          <TextInput
            onChangeText={setSearch}
            value={search} placeholder="Search"
          ></TextInput>
        </View>
        <ScrollView horizontal={true} style={{ flexGrow: 0 }}>
          <Text style={[filter == 'food' ? styles.selectedFilter : styles.filter]} onPress={() => setFilter('food')}>Foods</Text>
          <Text style={[filter == 'drink' ? styles.selectedFilter : styles.filter]} onPress={() => setFilter('drink')}>Drinks</Text>
          <Text style={[filter == 'snack' ? styles.selectedFilter : styles.filter]} onPress={() => setFilter('snack')}>Snacks</Text>
          <Text style={[filter == 'sauce' ? styles.selectedFilter : styles.filter]} onPress={() => setFilter('sauce')}>Sauces</Text>
        </ScrollView>
        <ScrollView horizontal={true}>
          {DATA.filter(value => value.type == filter && value.name.includes(search)).map((value, index) => {
            return <Card name={value.name} price={value.price}></Card>
          })}
        </ScrollView>
        <ScrollView horizontal={true}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/images/home.png')}
          />
          <Image style={{ width: 30, height: 30 }} source={require('../assets/images/heart.png')}
          />
          <Image style={{ width: 30, height: 30 }} source={require('../assets/images/user.png')}
          />
          <Image style={{ width: 30, height: 30 }} source={require('../assets/images/history.png')}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 50
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  filter: {
    margin: 5,
    color: '#9A9A9D'
  },
  selectedFilter: {
    color: '#FA4A0C',
    margin: 5,
    borderBottomColor: '#FA4A0C',
    borderBottomWidth: 3
  },
  searchContainer: {
    height: 40,
    width: 30 + windowWidth / 2,
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    padding: 10,
    flexDirection: 'row'
  }
});
