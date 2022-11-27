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
    FlatList, StyleSheet, Text, View
} from 'react-native';
 
 import { Dimensions } from 'react-native';
import Card from '../Card';


 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
 
 
 const Recommended = ({ headText,data,props}) => {
 
 
  
 
   return (
       <View>
         <View>
           <Text style={styles.header}>
            {headText}
           </Text>
         </View>
         <FlatList
        
           data={data}
           renderItem={({ item }) => item?.recommended&&<Card name={item.name} props={props}  url={item?.url} logo={item?.logo} />}
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
 
 export default Recommended;
 