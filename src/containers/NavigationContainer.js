import { StackNavigator } from 'react-navigation';
import Routes from "../config/routes";


export default StackNavigator(Routes, {
  navigationOptions: {
    title: ({ state }) => {
      if (state.params) {
        return `${state.params.title}`;
      }
    }
  }
});
