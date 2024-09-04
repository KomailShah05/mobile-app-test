import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  tabBarContainer: {
    position: 'absolute',
    top: 80, // Adjust based on header height
    left: 0,
    right: 0,
    height: 50, // Adjust as needed
    backgroundColor: 'white',
    zIndex: 1,
  },
  tabBar: {
    backgroundColor: 'white',
  },
  indicator: {
    backgroundColor: 'black',
    height: 2,
  },
  label: {
    fontFamily: 'Inter Variable',
    fontSize: 16,
    fontWeight: '500',
    color: '#1E1F24',
  },
  header: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    height: 60, // Adjust as needed
    backgroundColor: 'white',
    zIndex: 1,
  },
  bottomView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 59,
    backgroundColor: 'white',
    zIndex: 100,
  },
});
