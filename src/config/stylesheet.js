import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBarContainer: {
    flex: 0.1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  userTotal: {
    paddingLeft: 11,
    flex: 0.05,
  },
  sortContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dedfe1',
    margin: 5,
    height: 40,
    borderRadius: 5,
  },
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
  },
  offlineText: {color: '#ffffff'},
  barcodePermissionDialog: {
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#000000',
  },
  barcodeStatus: {
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dedfe1',
    height: 40,
  },
  searchBarLayout: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarInput: {
    flex: 83,
    fontWeight: 'normal',
    color: 'grey',
    fontSize: 16,
    height: '8%',
    paddingLeft: 5,
  },
  searchTextLayout: {flex: 85, flexDirection: 'row', alignItems: 'center'},
  footerLayout: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  listLayout: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  userNameLayout: {
    flex: 0.8,
    justifyContent: 'center',
  },
  userText: {
    fontWeight: '600',
    fontSize: 18,
  },
  textLayout: {
    flex: 0.6,
    justifyContent: 'center',
  },
  profileFont: {
    fontWeight: '600',
    fontSize: 24,
  },
  imageLayout: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  userSeprator: {
    height: 0.5,
    backgroundColor: 'grey',
    marginLeft: 5,
    marginRight: 5,
  },
});

module.exports = styles;
