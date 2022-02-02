import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import HomeRight from './src/headers/HomeRight';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer
      onReady={() => console.log('NavigationContainer Ready')}>
      <Stack.Navigator>
        <Stack.Screen
          name="Readhub Native"
          component={Home}
          options={{
            headerTitleAlign: 'left',
            headerRight: () => <HomeRight />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
