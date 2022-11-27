/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import {
  FlatList, StyleSheet, View
} from 'react-native';
 
 import { Dimensions } from 'react-native';
import Banner from '../Banner';


 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
 
 
 const Slider = ({data,props}) => {
 
 
  
 
   return (
       <View>
         
         <FlatList
           
           data={data}
           renderItem={({ item }) => <Banner props={props} logo={item?.logo}  url={item?.url} bannerimage={item?.image} />}
           keyExtractor={item => item.id}
           // ItemSeparatorComponent={Separator}
           horizontal={true}
         />
 
       </View>
       
 
   );
 };
 
 const styles = StyleSheet.create({
  
   
   header:{
     fontSize: 20,
     color: '#000',
   },
 
   itemText: {
     fontSize: 18,
     color: '#000',
     textAlign: 'center'
   },
 
   
 });
 
 export default Slider;
 