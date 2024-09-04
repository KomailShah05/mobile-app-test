import React from 'react';
import { Text, View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Color from '../../styles/Color';
import MyFeeds from './tabs/MyFeeds';
import MyPosts from './tabs/MyPosts';
import Groups from './tabs/Groups';



const renderScene = SceneMap({
    first: MyFeeds,
    second: MyPosts,
    third: Groups,
});

const renderTabBar = (props) => (
    <TabBar
        {...props}
        style={styles.tabBar}
        indicatorStyle={styles.indicator}
        renderLabel={({ route, focused }) => (
            <Text
                style={[
                    styles.label,
                    { color: focused ? Color.activeTabLabel : Color.inactiveTabLabel },  // Set label color based on focus state
                ]}
            >
                {route.title}
            </Text>
        )}
    />
);

export default function HomeScreen() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'My feed' },
        { key: 'second', title: 'All posts' },
        { key: 'third', title: 'Groups' },
    ]);

    return (
        <View style={styles.mainContainer}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: Color.white
    },
    tabBar: {
        backgroundColor: 'white',
    },
    indicator: {
        backgroundColor: 'black',  // Set the indicator color to black
        height: 2,  // Set the height of the indicator line
    },
    label: {

        padding: 16,
    },
});
