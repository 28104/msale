import {View, Text, StyleSheet} from 'react-native';
export default function Label({children, style}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  container: {
    marginHorizontal: 20,
  },
});
