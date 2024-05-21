import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

export default function FavouritesScreen() {
  const favouriteMealIds = useSelector(
    (state: any) => state.favouriteMeals.ids,
  );

  const favouriteMeals = MEALS.filter(meal =>
    favouriteMealIds.includes(meal.id),
  );

  if (favouriteMeals.length) {    
    return (
      <View style={styles.container}>
        <FlatList
          data={favouriteMeals}
          renderItem={item => <MealItem item={item} />}
        />
      </View>
    );
  }
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>No favourite meals yet</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});
