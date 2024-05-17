import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryBox(item: any) {
    return (
        <View>
        <Pressable style={{backgroundColor: item.item.color}}>
          <View style={styles.categoryBox}>
            <Text>{item.item.title}</Text>
          </View>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    categoryBox: {
      width: 100,
      height: 100
    }
  })