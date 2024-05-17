import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

export default function CategoryBox(item: any) {
  return (
    <View style={styles.categoryGrid}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({ pressed }) => [
          styles.button,
          Platform.OS === 'ios' && pressed ? styles.buttonPressed : null,
        ]}>
        <View style={[styles.categoryBox, {backgroundColor: item.item.color}]}>
          <Text style={styles.categoryText}>{item.item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryGrid: {
    flex: 1,
    // width: 150,
    height: 150,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.25
  },
  categoryBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
