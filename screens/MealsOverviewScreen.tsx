import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";

// beside navigation, we have another param that is route and contains info about current route, suchas params
// we can also use import {useRoute } from '@react-navigation/native for take route info
export default function MealsOverviewScreen({route}:any) {
  const catId = route.params.id;
  const displayedMeals = MEALS.filter(meal => { return meal.categoryIds.includes(catId)})
  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={item => <Text>{item.item.title}</Text>}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});