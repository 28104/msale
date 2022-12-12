import React, {useRef, useState} from 'react';
import ExpandableComponent from './Expandable';
import {
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
  Pressable,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dropdownApi} from '../../util/api-service';

const DropDown = ({children}) => {
  const content = require('../../assets/data/dropdownlabel.json');
  const [listDataSource, setListDataSource] = useState(content);
  const [menuedata, setmenuedata] = useState('');
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [userId, setUserId] = useState();
  const fetchUserData = async () => {
    const userdetails = await AsyncStorage.getItem('userdetails');
    const userdetail = JSON.parse(userdetails);
    if (userdetail) {
      setUserId(userdetail[0].userId);
    }
  };
  fetchUserData();
  if (userId !== undefined) {
    if (menuedata === '') {
      dropdownApi(userId)
        .then(response => response.json())
        .then(res => {
          setmenuedata(res.data[0]);
        });
    }
  }
  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };
  function Modalhandler(value) {
    setVisible(value);
  }
  const updateLayout = index => {
    const array = [...listDataSource];

    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        : (array[placeindex]['isExpanded'] = false),
    );
    setListDataSource(array);
  };
  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
    updateLayout();
  };
  const renderDropdown = () => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="none"
        style={styles.modal}>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}>
          <View style={[styles.dropdown, {top: dropdownTop, right: 4}]}>
            <ImageBackground
              source={require('../../assets/images/Background/headerBgvert.jpg')}>
              {listDataSource.map((item, key) => (
                <ExpandableComponent
                  key={key}
                  onClickFunction={() => {
                    updateLayout(key);
                  }}
                  item={item}
                  visible={Modalhandler}
                  menudata={menuedata}
                />
              ))}
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <Pressable
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}>
      <View style={styles.view}>{renderDropdown()}</View>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '60%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
});

export default DropDown;
