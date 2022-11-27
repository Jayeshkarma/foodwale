/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Connection from './src/components/connection';
import { Routes } from './src/routes';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const App = () => {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    LoadOff()
  }, [ ]);
  const [ApiTaglines, setApiTaglines] = useState(
    'Welcome Dear Foodie 😍',
  );

  const LoadOff = () => {
    setTimeout(async () => {
      try {
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }, 2000);
  };

 

  const Loader = () => {
    return (
      <View  style={{flex: 1, backgroundColor:"#fff"}}>
        <StatusBar backgroundColor="#fff" barStyle="light-content" />
        <Animatable.View
          animation="fadeIn"
          ease="ease-in"
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginBottom: 20,
            marginTop: '35%',
            zIndex: 100,
          }}>
          <Animatable.View
            animation="bounceInDown"
            ease="ease-in"
            delay={1000}
            duration={1500}>
            <Animatable.Image
              iterationCount={10}
              // animation='pulse'
              ease="ease-in"
              delay={1600}
              duration={1500}
              resizeMode="contain"
              style={{width: 200, height: 200, alignSelf: 'center'}}
              source={require('./src/assets/load.jpg')}
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInUp"
            ease="ease-in"
            delay={1060}
            style={{
              marginTop: '3%',
              marginBottom: '40%',
              paddingHorizontal: '5%',
            }}
            duration={1500}>
            <Animatable.Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                color: '#000',
                alignSelf: 'center',
                fontSize: 16,
                fontFamily: 'Nunito-SemiBold',
              }}>
              {ApiTaglines}
            </Animatable.Text>
          </Animatable.View>
          <Animatable.View
            animation="bounceInUp"
            ease="ease-in"
            delay={1000}
            duration={1500}>
            <LottieView
              source={require('./src/assets/loaders/loader.json')}
              autoPlay
              loop
              style={{
                height: Dimensions.get('window').height / 5,
                alignSelf: 'center',
              }}
            />
          </Animatable.View>
          <Animatable.View
            style={{alignSelf: 'center'}}
            animation="fadeIn"
            ease="ease-in"
            delay={1080}
            duration={1500}>
            {/* <Icon name='star' style={{ width: 22, height: 22, }} fill='#FFB300' /> */}
            <Text
              style={{
                fontSize: 10,
                marginLeft: 10,
                fontFamily: 'Nunito-Regular',
                color: '#BABEBE',
              }}>
              Version:{' '}
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 3,
                  fontFamily: 'Nunito-Regular',
                  color: '#bABEBE',
                }}>
                0.01
              </Text>
            </Text>
          </Animatable.View>
        </Animatable.View>
      </View>
    );
  };
 
  const netInfo = useNetInfo();
  return (
    <NavigationContainer>
      
  {Loading ? (
            <Loader />
          ) : (netInfo.isConnected? <Routes/>:<Connection/>)}
   </NavigationContainer>
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

export default App;
