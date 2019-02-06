import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestCounties, setSelectedCounty } from '../actions/actions';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert, BackHandler } from 'react-native';
import styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountyListComponent from '../components/CountyListComponent';

export class CountyListContainer extends Component {
  static navigationOptions = {
    title: 'Fylkesoversikt',
    headerStyle: styles.headerContainer,

    headerTintColor: '#F4F8F9',
    headerTitleStyle: styles.headerTitleStyles,
    headerRight: (
      <View style={styles.menuBarIcons}>
        <TouchableOpacity
          style={styles.homeNavButton}
          onPress={() =>
            Alert.alert(
              'Dette er en tittel',
              'Dette er en laaaaaaaaang lang lang lang tekst',
              [
              ],
              { onDismiss: () => { } },
              { cancelable: false }
            )
          }>
          <Icon name='info' size={30} style={styles.iconNavButton} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeNavButton}
          onPress={() => goBackHomeWithYou()}>
          <Icon name='home' size={30} style={styles.iconNavButton} />
        </TouchableOpacity>
      </View>
    )
  };

  goBackHomeWithYou = () => {
    this.props.navigation.navigate('Home');
  }

  componentDidMount() {
    goBackHomeWithYou = this.goBackHomeWithYou;
  }

  render() {
    const navigation = this.props.navigation;
    const { state, actions } = this.props;
    
    return (
      <View style={styles.container}>
        <CountyListComponent app={state.app} {...actions} navigation={navigation} />
      </View>
    );
  }
}


export const mapStateToProps = ({ app, counties, navigation, isLoading  }) => ({ state: { app, counties, navigation, isLoading } });

export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ setSelectedCounty }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CountyListContainer);
