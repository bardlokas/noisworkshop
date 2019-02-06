import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ListView, Button } from 'react-native';
import {
  requestCounties,
} from '../actions/actions';
import { NavigationActions } from 'react-navigation';
import styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: styles.frontpageheader,
    headerTitleStyle: styles.headerTitleStyles,
    headerTintColor: '#F4F8F9',
    headerRight: (
      <TouchableOpacity
        style={styles.homeNavButton}
        onPress={() => alert("ATTENZION", "SOMETHING")}>
        <Icon name='info' size={30} style={styles.iconNavButton} />
      </TouchableOpacity>
    ),
  };

  goBackHomeWithYou = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    const navigation = this.props.navigation;
    const requestCounties = this.props.requestCounties;
    return (
      <View style={styles.container}>
        <ScrollView>

          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => {
              this.props.actions.requestCounties();
              navigation.navigate('CountyListContainer');
            }
            }>
            <Icon name='graduation-cap' size={30} style={styles.iconHomeButton} />
            <Text style={styles.textHomeButton}> Vis fylker </Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}

export const mapStateToProps = ({ app, counties, selectedCounty, navigation, isLoading }) => ({ state: { app, counties, selectedCounty, navigation, isLoading } });

export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ requestCounties }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer);