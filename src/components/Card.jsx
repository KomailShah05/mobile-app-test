import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

import avatarImage from '../assets/avatar.png';
import societyImage from '../assets/society.png';
import iconLink from '../assets/Icon_link.png';
import image_1 from '../assets/image_1.png';
import person_1 from '../assets/person_1.png';
import person_2 from '../assets/person_2.png';
import person_3 from '../assets/person_3.png';
import LikeIcon from '../images/LikeIcon';
import comment from '../assets/comment.png';
import share from '../assets/share.png';

import {styles} from './styles';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={{...styles.flexStyle, justifyContent: 'space-between'}}>
        <View style={styles.flexStyle}>
          <Image source={avatarImage} style={styles.avatarImage} />
          <View style={styles.headerInfo}>
            <View style={styles.flexStyle}>
              <Text style={styles.text}>Volodymyr Boiarinov in </Text>
              <Image source={societyImage} style={styles.image} />
              <Text style={styles.text}>Portugal </Text>
            </View>
            <Text style={styles.subText}>August 13, 11:09 AM </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={iconLink} style={styles.avatarImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardTextSpacing}>
        <Text style={{...styles.cardText, fontWeight: '800'}}>
          Digital nomad visa in Portugal - my experience as web developer
        </Text>
        <Text style={{...styles.cardText, color: '#1E1F24', marginTop: 4}}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
      </View>
      <View style={styles.imageView}>
        <Image source={image_1} style={styles.postImage} />
        <Image source={image_1} style={styles.postImage} />
      </View>
      <View style={styles.commentViewBox}>
        <View style={styles.flexStyle}>
          <Image source={person_1} style={styles.commentImage} />
          <Image
            source={person_2}
            style={{...styles.commentImage, marginLeft: -14}}
          />
          <Image
            source={person_3}
            style={{...styles.commentImage, marginLeft: -14}}
          />

          <Text style={{...styles.text, color: '#0002119D', marginLeft: 12}}>
            and 78 others
          </Text>
        </View>
        <Text style={{...styles.text, color: '#0002119D'}}>4 comments</Text>
      </View>
      <View style={styles.borderBox}>
        <View style={styles.iconViewBox}>
          <View style={styles.iconFlexStyle}>
            <LikeIcon />
            <Text style={{...styles.text, marginLeft: 4, color: '#1E1F24'}}>
              Like
            </Text>
          </View>
          <View style={styles.iconFlexStyle}>
            <Image source={comment} />

            <Text style={{...styles.text, marginLeft: 4, color: '#1E1F24'}}>
              Comment
            </Text>
          </View>
          <View style={styles.iconFlexStyle}>
            <Image source={share} />
            <Text style={{...styles.text, marginLeft: 4, color: '#1E1F24'}}>
              share
            </Text>
          </View>
        </View>
        <View style={styles.commentBox}>
          <View style={styles.flexStyle}>
            <Image source={avatarImage} />
            <View style={styles.commentText}>
              <Text style={{...styles.text, color: '#1E1F24'}}>Jane Smith</Text>
              <Text style={{...styles.text, color: '#62636C'}}>
                Welcome to Portugal!
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
