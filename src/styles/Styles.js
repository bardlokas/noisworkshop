import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0098d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontpageheader: {
    backgroundColor: '#0098d4',
    paddingRight: 10
  },
  headerContainer: {
    backgroundColor: '#018BC1'
  },
  headerTitleStyles: {
    color: '#F4F8F9',
    alignItems: 'center',
    textAlign: 'center'
  },
  homeButton: {
    backgroundColor: '#54CBF9',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    alignSelf: 'stretch',
    borderRadius: 10,
    padding: 20,
  },
  menuBarIcons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  textHomeButton: {
    color: '#F4F8F9',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  iconHomeButton: {
    marginRight: 10,
    color: '#F4F8F9',
    marginBottom: 10
  },
  homeNavButton: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  iconNavButton: {
    color: '#F4F8F9',
    marginRight: 15,
    marginTop: 5
  }
});