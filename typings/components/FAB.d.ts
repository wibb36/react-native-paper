import * as React from 'react';
import { ViewProps } from 'react-native';
import { ThemeShape, IconSource } from '../types';

export interface FABGroupAction {
  icon: string;
  iconSize?: number;
  label?: string;
  color?: string;
  accessibilityLabel?: string;
  style?: any;
  onPress: () => any;
}

export interface FABGroupProps {
  actions: Array<FABGroupAction>;
  icon: IconSource;
  iconSize=?: number;
  accessibilityLabel?: string;
  color?: string;
  onPress?: () => any;
  open: boolean;
  onStateChange: (state: { open: boolean }) => any;
  visible?: boolean;
  style?: any;
  fabStyle?: any;
  theme?: ThemeShape;
}

export interface FABProps extends ViewProps {
  icon: IconSource;
  iconSize?: number;
  label?: string;
  accessibilityLabel?: string;
  small?: boolean;
  color?: string;
  disabled?: boolean;
  visible?: boolean;
  onPress?: () => any;
  theme?: ThemeShape;
}

export class FAB extends React.Component<FABProps> {
  static Group: React.ComponentType<FABGroupProps>;
}
