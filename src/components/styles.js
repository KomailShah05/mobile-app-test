import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  text: {
    fontFamily: 'Inter Variable', // Use the exact name of the font as listed in the font file
    fontSize: 14,
    fontWeight: '500',
    color: '#000107E1',
  },

  subText: {
    fontFamily: 'Inter Variable', // Use the exact name of the font as listed in the font file
    fontSize: 12,
    fontWeight: '400',
    color: '#62636C',
    marginTop: 4,
  },
  avatarImage: {
    height: 32,
    width: 32,
  },
  headerInfo: {
    marginLeft: 12,
  },
  flexStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconFlexStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  iconViewBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingTop: 19,
    paddingBottom: 22,
    paddingLeft: 32.5,
    paddingRight: 27,
  },
  borderBox: {
    borderTopWidth: 1, // Define border width
    borderBottomWidth: 1, // Define border width
    borderColor: '#000B3618', // Define border color
    borderStyle: 'solid', // Optional: define border style (solid, dashed, dotted)
    paddingBottom: 16,
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 4,
    marginLeft: 6,
    marginRight: 6,
  },
  cardTextSpacing: {
    marginTop: 16,
  },
  cardText: {
    fontFamily: 'Inter Variable', // Use the exact name of the font as listed in the font file
    fontSize: 16,
    color: '#1E1F24',
    lineHeight: 24,
  },
  imageView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  postImage: {
    height: 230,
    width: '50%',
    borderRadius: 8,
  },
  commentImage: {
    width: 24,
    height: 24,
  },
  commentViewBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 12,
  },
  commentBox: {
    backgroundColor: '#00104010',
    borderRadius: 12,
    padding: 10,
    marginTop: 12,
  },
  commentText: {
    marginLeft: 12,
  },
});
