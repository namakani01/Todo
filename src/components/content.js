import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../assets/ExternalStyle';

const Content = () => {
  return (
    <View>
      <Text style={styles.textcontent}>Hello User</Text>
      <Text style={styles.text1content}>What are you going to do?</Text>
    </View>
  );
};

export default Content;
