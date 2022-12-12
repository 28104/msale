import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
function ExpandableComponent({item, onClickFunction, visible, menudata}) {
  const UserDetails = require('../../assets/data/UserDetails.json');
  const navigation = useNavigation();
  const [layoutHeight, setLayoutHeight] = useState(0);
  useLayoutEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);
  function onItemPress(item) {
    if (item === 'Logout') {
      navigation.navigate('LoginPage');
    } else {
      navigation.navigate(item);
    }
    visible(false);
  }

  return (
    <View>
      {item.label === 'Supervisor Details' ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onClickFunction}
          style={item.isExpanded ? styles.item : styles.items}
          key={item.label}>
          <Text style={styles.text}>
            {menudata ? menudata.roleName : 'Loading'}
          </Text>
          <View
            style={{
              height: layoutHeight,
              overflow: 'hidden',
            }}>
            {UserDetails.User_Details.map(item => (
              <View key={item.id}>
                <View style={styles.separator}>
                  <Text style={styles.subtext}>
                    {item.des} Name :{item.name}
                  </Text>
                </View>
                <View style={styles.separator}>
                  <Text style={styles.subtext}>
                    {item.des} Contact : {item.contact}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          key={item.label}
          style={styles.items}
          onPress={() => {
            onItemPress(item.label);
          }}>
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  subtext: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 4,
    overflow: 'hidden',
  },
  item: {
    paddingHorizontal: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: 'pink',
  },
  items: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'pink',
  },
  subitem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderColor: 'pink',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'pink',
  },
});
export default ExpandableComponent;
