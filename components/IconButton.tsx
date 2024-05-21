import { Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconButton({name, onPress}:any) {
  return(
    <Pressable>
      <Icon.Button
        name={name}
        backgroundColor="#06595C"
        onPress={onPress}
      >
      </Icon.Button>
    </Pressable>
  )
}