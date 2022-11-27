/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Card = ({name, logo,url,props,recommended}) => (

  <TouchableOpacity onPress={()=>props.navigation.navigate('WebPage',{url:url,name:name,logo:logo})} style={styles.item}>
    <Image
      style={styles.logo}
      source={{
        uri: logo,
      }}
    />
    <Text style={styles.itemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  logo: {

    width: 66,
    height: 58,
    marginBottom: '2%',
    borderRadius:10
  },
  item: {
   alignContent:'center',
    padding: 15,
    backgroundColor: '#fff',
    width: windowWidth / 3.5,
    // height: windowHeight/,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
});
export default Card;
