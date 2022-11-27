/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';


 import React from 'react';
import { PermissionsAndroid, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 
 import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AllApp from '../components/AllApp';
import Recommended from '../components/Recomended';
import Slider from '../components/Slider';
import { ANIMAL_NAMES, banners } from '../core/constants';

 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
 
 
 const Home = (props) => {
    const requestLocationPermission=async()=> {
        try {
      
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              'title': 'App Location Permission',
              'message': 'Maps App needs access to your map ' +
                'so you can be navigated.'
            }
          );
      
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location");
            return true;
      
          } else {
            console.log("location permission denied");
            return false;
          }
      
        } catch (err) {
          console.warn(err)
        }
      
       }
   return (
     <SafeAreaView  style={{backgroundColor:'#fff',  flex:1, }}>
        <TouchableOpacity onPress={()=>requestLocationPermission()} style={{paddingVertical:'2%'}} >
            <Text style={[styles?.itemText,{fontWeight:'600'}]} >
            FoodWale 🍽️
            </Text>
        </TouchableOpacity>
        <ScrollView  style={{backgroundColor:'#fff',  flex:1, paddingTop:'1%' }}>
        <Slider props={props}  data={banners} />
     <View style={{backgroundColor:'#fff',  paddingHorizontal:'2%', flex:1, }}>
     
    <Recommended props={props} headText='Recommended Apps' data={ANIMAL_NAMES} />
    <AllApp props={props} headText='All Food Apps' data={ANIMAL_NAMES} />
  
     </View>
     <BannerAd  size={BannerAdSize?.BANNER} unitId={TestIds.BANNER} />
     </ScrollView>
     
     </SafeAreaView>
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
 
 export default Home;
 