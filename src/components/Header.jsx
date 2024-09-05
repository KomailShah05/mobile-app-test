import React from 'react'
import { View, Text, Image } from 'react-native'
export default Header = () => {
    return (
        <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image source={require('../assets/camera.png')} />
            <Image source={require('../assets/search.png')} />

        </View>
    )
}
