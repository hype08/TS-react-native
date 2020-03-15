import * as React from 'react';
import {View} from 'react-native';

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({children}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </View>
  );
};
