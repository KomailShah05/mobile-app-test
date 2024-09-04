/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/views/home/HomeScreen';
import MessageScreen from './src/views/messages/MessageScreen';
import FeedsScreen from './src/views/feeds/FeedsScreen';
import NotificationsScreen from './src/views/notifications/NotificationsScreen';
import ProfileScreen from './src/views/profile/ProfileScreen';
import HomeIcon from './src/assets/home.png';
import FeedIcon from './src/assets/feeds.png';
import MessageIcon from './src/assets/message.png';
import NotificationIcon from './src/assets/notification.png';
import ProfileIcon from './src/assets/profile.png';


// Import Image component from react-native
import { Image } from 'react-native';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return (
                <Image
                  source={HomeIcon}
                  style={{ width: size, height: size, tintColor: color }}
                />
              );
            } else if (route.name === 'Feed') {
              return (
                <Image
                  source={FeedIcon} // Replace with appropriate icon
                  style={{ width: size, height: size, tintColor: color }}
                />
              );
            } else if (route.name === 'Messages') {
              return (
                <Image
                  source={MessageIcon} // Replace with appropriate icon
                  style={{ width: size, height: size, tintColor: color }}
                />
              );
            } else if (route.name === 'Notification') {
              return (
                <Image
                  source={NotificationIcon} // Replace with appropriate icon
                  style={{ width: size, height: size, tintColor: color }}
                />
              );
            } else if (route.name === 'Profile') {
              return (
                <Image
                  source={ProfileIcon} // Replace with appropriate icon
                  style={{ width: size, height: size, tintColor: color }}
                />
              );
            }
            return null;
          },

          tabBarLabel: () => null,
          tabBarActiveTintColor: '#1E1F24',
          tabBarInactiveTintColor: '#00051D74',
        })}
      >
        <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Tab.Screen name="Feed" component={FeedsScreen} />
        <Tab.Screen name="Messages" component={MessageScreen} />
        <Tab.Screen name="Notification" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
