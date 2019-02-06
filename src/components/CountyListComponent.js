import React, { Component } from 'react';

import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  FlatList
} from 'react-native';

import styles from '../styles/Styles';


export default class CountyListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      counties: this.props.app.counties
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  componentDidMount() {
    console.log(this.state.counties);
  }

  countyClicked(county) {
    console.log(county.name);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.counties}
          renderItem={({item}) => 
          <TouchableOpacity
          onPress={this.countyClicked.bind(this, item)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
        }
        />
      </View>
    );
  }
}
