import {useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import IconButton from '../components/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {addFavourite, removeFavourite} from '../store/redux/favourites';

export default function MealDetailScreen({route, navigation}: any) {
  const mealInfo = route.params.item;
  const mealTitle = mealInfo.item.title;
  const mealId = mealInfo.item.id;
  // react-redux provides the state param to access store. so we use the key declared in configureStore() and so access to slice
  const favouriteMealIds = useSelector(
    (state: any) => state.favouriteMeals.ids,
  );
  const isMealFavourite = favouriteMealIds.includes(mealId);
  //  dispatch is used to call slice actions
  const dispatch = useDispatch();

  function changeFavoriteStatusHandler() {
    if (isMealFavourite) {
      dispatch(removeFavourite({id: mealId}));
    } else {
      dispatch(addFavourite({id: mealId}));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        // <Button
        //   onPress={() => console.log('Pressed')}
        //   title="&#9829;"
        //   color="#06595C"
        // />
        <IconButton
          name={isMealFavourite ? 'star' : 'star-o'}
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <ScrollView>
      <Image source={{uri: mealInfo.item.imageUrl}} style={styles.mealImage} />
      <View style={styles.mealContainer}>
        <Text style={styles.mealTitle}>{mealInfo.item.title}</Text>
        <View style={styles.mealDetails}>
          <Text style={styles.mealDetailText}>
            Duration: {mealInfo.item.duration} min
          </Text>
          <Text style={styles.mealDetailText}>
            Complexity: {mealInfo.item.complexity}
          </Text>
          <Text style={styles.mealDetailText}>
            Affordability: {mealInfo.item.affordability}
          </Text>
        </View>
        <View style={styles.extraInfo}>
          <Text style={styles.extraInfoTitle}>Ingredients</Text>
          {mealInfo.item.ingredients.map((ingredient: string) => (
            <Text>- {ingredient}</Text>
          ))}
        </View>
        <View style={styles.extraInfo}>
          <Text style={styles.extraInfoTitle}>Steps</Text>
          {mealInfo.item.steps.map((step: string, index: number) => (
            <Text>
              {index + 1}
              {')'} {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    margin: 16,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  mealImage: {
    width: '100%',
    height: 300,
  },
  mealDetails: {
    marginVertical: 16,
    alignItems: 'center',
  },
  mealDetailText: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
  },
  extraInfo: {
    marginVertical: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#71B8BB',
  },
  extraInfoTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
