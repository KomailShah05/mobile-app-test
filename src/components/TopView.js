import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import Color from '../styles/Color';
import ImageComponent from './ImageComponent';
import avatarImage from '../assets/avatar.png'; // Import the image
import gifImage from '../assets/gif.png'; // Import the image
import bulletImage from '../assets/bullet.png'; // Import the image
import videoImage from '../assets/video.png'; // Import the image

const TopView = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 24,
        alignItems: 'center',
        marginTop: 130,
        justifyContent: 'space-between',
      }}>
      <ImageComponent imagePath={avatarImage} />
      <TextInput
        style={{
          backgroundColor: Color.textViewColor,
          height: 40,
          justifyContent: 'center',
          paddingHorizontal: 5,
          borderRadius: 5,
          marginLeft: 5,
          flex: 1,
        }}
        placeholder="What’s on your mind?"
      />
      <ImageComponent imagePath={videoImage} />
      <ImageComponent imagePath={gifImage} />
      <ImageComponent imagePath={bulletImage} />
    </View>
  );
};

export default TopView;
