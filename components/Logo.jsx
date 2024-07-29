import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Logo() {
  return (
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Path
          d="M50 0 L100 100 L0 100 Z"
          fill="blue"
          stroke="red"
          strokeWidth="2"
        />
      </Svg>
  );
}