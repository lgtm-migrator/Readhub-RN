import {jest} from '@jest/globals';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockClipboard from '@react-native-clipboard/clipboard/jest/clipboard-mock.js';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
import 'react-native-gesture-handler/jestSetup';

// import {View as mockView} from 'react-native';

jest.useFakeTimers();

global.__reanimatedWorkletInit = jest.fn();

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@react-native-clipboard/clipboard', () => mockClipboard);
jest.mock('react-native-device-info', () => mockRNDeviceInfo);
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.doMock('react-native-background-timer', () => {
  return {
    stopBackgroundTimer: jest.fn(),
    runBackgroundTimer: jest.fn(),
  };
});

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('react-native-tab-view', () => {
//   return {
//     TabView: mockView,
//   };
// });

// jest.doMock('react-native-bootsplash', () => {
//   return {
//     hide: jest.fn().mockResolvedValueOnce(),
//     show: jest.fn().mockResolvedValueOnce(),
//     getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
//   };
// });
