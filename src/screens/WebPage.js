/* eslint-disable prettier/prettier */
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { Dimensions, StatusBar, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import WebView from 'react-native-webview';

const WebPage = (props ) => {
  const [state, setstate] = useState(true);
const url =props?.route?.params?.url
const name =props?.route?.params?.name
const logo =props?.route?.params?.logo
const [Loading, setLoading] = useState(true);
useEffect(() => {
  LoadOff()
}, [ ]);
const [ApiTaglines, setApiTaglines] = useState(
 `Let's order 😋 from ${name} `,
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
    <View  style={{flex: 1, backgroundColor:"#fff",    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%',
    opacity: 1}}>
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
            source={logo?{uri: `${logo}`}:require('../assets/load.jpg')}
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
            source={require('../assets/loaders/loader.json')}
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
      
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

  return(<>
  {/* {state&&<Loader/>} */}
  <WebView   startInLoadingState={true}  renderLoading={() => <Loader/>} onLoadStart={() => setstate(true)}
  onLoadEnd={() => setstate(false)} source={{uri:`${url}`}} />
  </>)
};
export default WebPage