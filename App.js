import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Bubble from './screens/Bubble';
import Insertion from './screens/Insertion';
import Quick from './screens/Quick';
import Heap from './screens/Heap';
import Selection from './screens/Selection';
import Shell from './screens/Shell';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bubble" component={Bubble} />
        <Stack.Screen name="Insertion" component={Insertion} />
        <Stack.Screen name="Quick" component={Quick} />
        <Stack.Screen name="Heap" component={Heap} />
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="Shell" component={Shell} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
