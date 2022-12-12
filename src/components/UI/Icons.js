import { Pressable, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

function Icons({ onPress, icon, size, color }) {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 10,
  },
});
export default Icons;
