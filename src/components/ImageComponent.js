import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Define the component with a prop for the image path
const ImageComponent = ({ imagePath }) => {
    return (
        <View style={styles.container}>
            <Image source={imagePath} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
    },
    image: {
        height: 30,
        width: 30,
    },
});

export default ImageComponent;
