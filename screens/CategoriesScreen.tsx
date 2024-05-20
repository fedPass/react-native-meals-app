import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryBox from '../components/CategoryBox';

// navigation is a prop that stack-navigation gives to all the screen component
// alternately it's possible to import { useNavigation } from '@react-navigation/native'
// and inside component declare const navigation = useNavigation()
export default function CategoriesScreen({navigation}: any) {
  const pressHandler = () => {
    navigation.navigate('MealOverview');
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={item => <CategoryBox item={item.item} onPress={pressHandler} /> }
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}
