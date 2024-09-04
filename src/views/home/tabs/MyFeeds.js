import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import TopView from '../../../components/TopView';
import LineView from '../../../components/LineView';
import Card from '../../../components/Card';
import {styles} from './style';

const MyFeeds = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <TopView />
      <LineView />
      <Card />
      <Card />
    </ScrollView>
  );
};

export default MyFeeds;
