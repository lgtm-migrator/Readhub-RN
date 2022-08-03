import color from 'color';
import React from 'react';
import {View} from 'react-native';
import {Text, TouchableRipple, useTheme} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IcRoundCheck from '../assets/icons/IcRoundCheck';
import useColorSystem from '../utils/useColorSystem';

const Appearance: React.FC = () => {
  const insets = useSafeAreaInsets();

  const {colors} = useTheme();
  const {appearance, updateAppearance} = useColorSystem();

  const appearances = [
    {
      label: '浅色',
      value: 'light',
      rightIcon: undefined,
      onPress: () => updateAppearance('light'),
    },
    {
      label: '深色',
      value: 'dark',
      rightIcon: undefined,
      onPress: () => updateAppearance('dark'),
    },
    {
      label: '跟随系统',
      value: 'followSystem',
      rightIcon: undefined,
      onPress: () => updateAppearance('followSystem'),
    },
  ];

  return (
    <View style={{marginHorizontal: 16, marginTop: 16, marginBottom: 16 + insets.bottom}}>
      {appearances.map((item, index) => (
        <TouchableRipple
          key={item.label}
          borderless
          style={{
            backgroundColor: color(colors.secondary).alpha(0.05).toString(),
            height: 48,
            justifyContent: 'center',
            paddingLeft: 16,
            paddingRight: 12,
            borderTopLeftRadius: index === 0 ? 16 : 0,
            borderTopRightRadius: index === 0 ? 16 : 0,
            borderBottomLeftRadius: index === appearances.length - 1 ? 16 : 0,
            borderBottomRightRadius: index === appearances.length - 1 ? 16 : 0,
          }}
          onPress={item.onPress}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: colors.onSurfaceVariant, includeFontPadding: false}}>{item.label}</Text>
            {appearance === item.value && <IcRoundCheck size={18} color={colors.primary} />}
          </View>
        </TouchableRipple>
      ))}
    </View>
  );
};

export default Appearance;
