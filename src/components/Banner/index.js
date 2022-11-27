/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Banner = ({ bannerimage,url,props,logo}) => (

  <TouchableOpacity onPress={()=>props.navigation.navigate('WebPage',{url:url,logo:logo})} style={styles.item}>
    <Image
    resizeMode='cover'
      style={styles.logo}
      source={{
        uri: bannerimage,
      }}
    />
  <Text>{bannerimage}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  logo: {
    width: windowWidth/1.05,
    height: windowHeight/5,
 alignContent:"center",
    borderRadius:15,
   
    
  },
  item: {
   alignContent:'center',
    backgroundColor: '#fff',
    borderRadius:15,
    width: windowWidth,
    // height: windowHeight/4.7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  
});
export default Banner;
