import React from 'react';
import {ScrollView} from 'react-native';
import TopView from '../../../components/TopView';
import LineView from '../../../components/LineView';
import Card from '../../../components/Card';

const title = 'Digital nomad visa in Portugal - my experience as web developer';
const description =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

const MyFeeds = ({onScroll}) => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, paddingBottom: 59}}
      scrollEventThrottle={16}
      onScroll={onScroll}>
      <TopView />
      <LineView />
      <Card view="image" title={title} description={description} />
      <Card view="text" title={title} description={description} />
      <Card
        view="link"
        title={'Check out new article'}
        description={'It’s about Portugal!'}
      />
      <Card
        view="poll"
        title={'McDonalds'}
        description={'Let’s talk about burgers'}
      />
    </ScrollView>
  );
};

export default MyFeeds;
