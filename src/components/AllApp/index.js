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
 
 
 const AllApp = ({headText,data,props}) => {
    
   return (
    <View>
    <View>
      <Text style={styles.header}>
        {headText}
      </Text>
    </View>
  
    <FlatList
    contentContainerStyle={{alignSelf:'center',justifyContent:'center'}}
     numColumns={3}
      data={data}
      renderItem={({ item }) => <Card name={item.name} props={props}  url={item?.url}  logo={item?.logo} />}
      keyExtractor={item => item.id}
      // ItemSeparatorComponent={Separator}
    
    />
<View style={{height:`20%`}}>

</View>
  </View>
   );
 };
 
 const styles = StyleSheet.create({
  
   
   header:{
     fontSize: 20,
     color: '#000',
     marginBottom:'2%'
   },
 
   itemText: {
     fontSize: 18,
     color: '#000',
     textAlign: 'center'
   },
 
   
 });
 
 export default AllApp;
 