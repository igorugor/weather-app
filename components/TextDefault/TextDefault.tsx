import React from 'react';
import {Text} from 'react-native';
import {useStyle} from './styles';

interface TextDefaultProps {
  children: React.ReactNode;
  bold?: boolean;
  fontSize?: number;
}

export const TextDefault: React.FC<TextDefaultProps> = ({
  children,
  bold,
  fontSize = 22,
}) => {
  const styles = useStyle();

  return (
    <Text
      style={[
        bold ? [styles.text, styles.boldText] : styles.text,
        {
          fontSize,
        },
      ]}>
      {children}
    </Text>
  );
};
