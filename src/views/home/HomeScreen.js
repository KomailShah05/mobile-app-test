import React, {useRef, useState} from 'react';
import {Text, View, useWindowDimensions, Animated} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import Color from '../../styles/Color';
import MyFeeds from './tabs/MyFeeds';
import MyPosts from './tabs/MyPosts';
import Groups from './tabs/Groups';
import Header from '../../components/Header';
import {Image} from 'react-native';
import {styles} from './styles';
import HomeIcon from '../../assets/home.png';
import FeedIcon from '../../assets/feeds.png';
import MessageIcon from '../../assets/message.png';
import NotificationIcon from '../../assets/notification.png';
import ProfileIcon from '../../assets/profile.png';

const renderTabBar = props => (
  <TabBar
    {...props}
    style={styles.tabBar}
    indicatorStyle={styles.indicator}
    renderLabel={({route, focused}) => (
      <Text
        style={[
          styles.label,
          {color: focused ? Color.activeTabLabel : Color.inactiveTabLabel},
        ]}>
        {route.title}
      </Text>
    )}
  />
);

export default function HomeScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'My feed'},
    {key: 'second', title: 'All posts'},
    {key: 'third', title: 'Groups'},
  ]);

  const scrollY = useRef(new Animated.Value(0)).current;
  const headerHeight = 80; // Adjust as needed
  const tabBarHeight = 120; // Adjust as needed

  const translateYHeader = scrollY.interpolate({
    inputRange: [-headerHeight, 0, headerHeight],
    outputRange: [0, 0, -headerHeight],
    extrapolate: 'clamp',
  });

  const translateYTabBar = scrollY.interpolate({
    inputRange: [-headerHeight, 0, headerHeight + tabBarHeight],
    outputRange: [0, 0, -tabBarHeight],
    extrapolate: 'clamp',
  });

  // Interpolate scrollY for background color
  const bottomViewBackgroundColor = scrollY.interpolate({
    inputRange: [0, 100], // Adjust this range based on your scroll behavior
    outputRange: ['rgba(255, 255, 255, 1)', '#000B3618'], // From white to transparent
    extrapolate: 'clamp',
  });

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return (
          <MyFeeds
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {
                useNativeDriver: false,
              },
            )}
          />
        );
      case 'second':
        return <MyPosts />;
      case 'third':
        return <Groups />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: translateYHeader}]}]}>
        <Header />
      </Animated.View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <Animated.View
            style={[
              styles.tabBarContainer,
              {transform: [{translateY: translateYTabBar}]},
            ]}>
            {renderTabBar(props)}
          </Animated.View>
        )}
      />
      <Animated.View
        style={[
          styles.bottomView,
          {backgroundColor: bottomViewBackgroundColor},
        ]}>
        <Image source={HomeIcon} style={{width: 23.33, height: 23.33}} />
        <Image source={FeedIcon} style={{width: 23.33, height: 23.33}} />
        <Image source={MessageIcon} style={{width: 23.33, height: 23.33}} />
        <Image
          source={NotificationIcon}
          style={{width: 23.33, height: 23.33}}
        />
        <Image source={ProfileIcon} style={{width: 23.33, height: 23.33}} />
      </Animated.View>
    </View>
  );
}
