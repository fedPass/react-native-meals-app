import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryBox from '../components/CategoryBox';

export default function CategoriesScreen() {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={item => <CategoryBox item={item.item} /> }
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}
