import * as React from 'react';
import { exp } from 'react-native-reanimated';

export const navigationRef = React.createRef()
export function navigate (name, params) {
  navigationRef.current?.navigate(name, params)
}