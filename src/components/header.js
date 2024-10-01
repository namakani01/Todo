import React from 'react';
import {View} from 'react-native';
import {styles} from '../assets/ExternalStyle';
import Content from './content';
import Inputbox from './inputbox';
import {SafeAreaView} from 'react-native-safe-area-context';

const Header = props => {
  // console.log(props)

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.header}>
      
        <Content></Content>
        <Inputbox data={props}></Inputbox>
      
    </View>
    </SafeAreaView>
  );
};

export default Header;
