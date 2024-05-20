import {FlatList, StyleSheet, Text, View} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

// beside navigation, we have another param that is route and contains info about current route, suchas params
// we can also use import {useRoute } from '@react-navigation/native for take route info
export default function MealsOverviewScreen({route, navigation}: any) {
  const catId = route.params.id;
  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.includes(catId);
  });

  // useLayoutEffect() hook make side effect before component will re-rendered
  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find(category => category.id === catId)?.title
    // navigation.setOptions() per settare options allo screen
    navigation.setOptions({
      title: catTitle
    })
  }, [catId, navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={item => <MealItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});