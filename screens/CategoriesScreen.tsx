import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryBox from '../components/CategoryBox';

export default function CategoriesScreen() {
  return (
    <View style={styles.categoriesGrid}>
      <FlatList
        data={CATEGORIES}
        renderItem={item => <CategoryBox item={item.item} /> }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesGrid: {
    flexDirection: 'row'
  }
})
