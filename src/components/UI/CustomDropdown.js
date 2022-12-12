import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function CustomDropdown({data,label,onSelect}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>*</Text>
      <SelectDropdown
            data={data}
            onSelect={onSelect}
            defaultButtonText={label}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
          />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin : 25,
    backgroundColor : "#e4e4e5"
  },
  dropdownBtnStyle: {
    width: '90%',
    height: 40,
    backgroundColor: '#e4e4e5',
  },
  text : {
    color : 'red',
    marginLeft : 20,
  },
  dropdownBtnTxtStyle: {color: '#85a2d8', textAlign: 'left'},
  dropdownRowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdownRowTxtStyle: {color: '#444', textAlign: 'left'},
  dropdownDropdownStyle: {backgroundColor: '#EFEFEF'},
});
export default CustomDropdown;
