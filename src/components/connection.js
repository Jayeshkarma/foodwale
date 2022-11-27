/* eslint-disable prettier/prettier */
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

export default props => {
  const [state, setstate] = useState(false);
  const [Loading, setLoading] = useState(false);
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
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get('window').width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
        backgroundColor: '#F4F9FC',
      }}>
      <LottieView
        source={require('../assets/loaders/nointernet.json')}
        autoPlay
        loop
        style={{
          marginBottom: '5%',
          height: Dimensions.get('window').height / 2,
          alignSelf: 'center',
        }}
      />
      <Text style={{fontSize: 18, fontFamily: 'Nunito-Bold'}}>Ooops!</Text>
      <Text
        style={{
          fontFamily: 'Nunito-SemiBold',
          alignSelf: 'center',
          fontSize: 16,
          textAlign: 'center',
          color: '#7D88A5',
        }}>
        {'  No internet Connection \n Found Check your conection '}
      </Text>
      <View style={{alignSelf: 'flex-end', width: '100%', marginTop: '7%'}}>
        <TouchableOpacity onPress={() =>{setLoading(true); LoadOff()}}>
          <View
            style={{
              alignSelf: 'center',
              width: '70%',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: Loading ? '#e3e3e3' : '#00B9D1',
              borderColor: Loading ? '#e3e3e3' : '#00B9D1',
              borderWidth: 1,
              borderRadius: 50,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                paddingVertical: 10,
                color: '#F7F7F7',
                fontFamily: 'Nunito-SemiBold',
              }}
              category="h6">
              {Loading ? 'LOADING...' : 'Try Again '}{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
