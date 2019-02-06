import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import NavigationContainer from './containers/NavigationContainer';

import { requestCounties, setSelectedCounty } from './actions/actions';

export class AppWithNavigationState extends Component {
  constructor(props) {
    super(props);
    this.state = { loadingFonts: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loadingFonts: false });
  }

  render() {
    const { dispatch, navigation, requestCounties, setSelectedCounty } = this.props;
    if (this.state.loadingFonts) {
    }
    return (
      <NavigationContainer navigation={addNavigationHelpers({ dispatch, state: navigation })} />
    );
  }
}

export const mapStateToProps = ({ navigation, requestCounties, setSelectedCounty }) => ({ navigation, requestCounties,setSelectedCounty });

export default connect(mapStateToProps)(AppWithNavigationState);
