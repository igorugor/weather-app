import React from 'react';
import {useStyle} from './styles';
import {View} from 'react-native';
import {CircleSnail} from 'react-native-progress';

export const ProggressBar = () => {
  const stylse = useStyle();

  return (
    <View style={stylse.proggressBarContainer}>
      <CircleSnail />
    </View>
  );
};
