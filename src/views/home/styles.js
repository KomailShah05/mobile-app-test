import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  tabBarContainer: {
    position: 'absolute',
    top: Platform.OS == 'android' ? 80 : 100, // Adjust based on header height
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
    top: Platform.OS == 'android' ? 30 : 60,
    left: 0,
    right: 0,
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
    bottom: Platform.OS == 'android' ? 0 : 10,
    height: 59,
    backgroundColor: 'white',
    zIndex: 100,
  },
});
