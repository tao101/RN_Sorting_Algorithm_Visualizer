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
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Algorithms',
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Bubble"
          component={Bubble}
          options={{ title: null }}
        />
        <Stack.Screen
          name="Insertion"
          component={Insertion}
          options={{ title: null }}
        />
        <Stack.Screen
          name="Quick"
          component={Quick}
          options={{ title: null }}
        />
        <Stack.Screen name="Heap" component={Heap} options={{ title: null }} />
        <Stack.Screen
          name="Selection"
          component={Selection}
          options={{ title: null }}
        />
        <Stack.Screen
          name="Shell"
          component={Shell}
          options={{ title: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
