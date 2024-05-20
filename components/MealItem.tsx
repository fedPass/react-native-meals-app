import {useNavigation} from '@react-navigation/native';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

export default function MealItem({item}: any) {
  const navigation: any = useNavigation();

  return (
    <View style={styles.mealGrid}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={styles.button}
        onPress={() => navigation.navigate('MealDetail', {item})}>
        <View style={styles.mealItem}>
          <Image source={{uri: item.item.imageUrl}} style={styles.mealImage} />
          <Text style={styles.mealTitle}>{item.item.title}</Text>
          <Text>
            {item.item.duration} min - {item.item.complexity} -{' '}
            {item.item.affordability}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealGrid: {
    flex: 1,
    height: 200,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  mealItem: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 12,
  },
  mealImage: {
    width: '100%',
    height: '100%',
  },
  mealTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  detailsText: {
    fontSize: 12,
    padding: 8,
  },
});
