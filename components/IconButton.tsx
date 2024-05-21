import { Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconButton() {
  return(
    <Pressable>
      <Icon.Button
        name="star"
        backgroundColor="#06595C"
        onPress={() => console.log('Pressed')}
      >
      </Icon.Button>
    </Pressable>
  )
}