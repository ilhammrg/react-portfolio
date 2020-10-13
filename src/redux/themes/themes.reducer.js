import themesActionTypes from './themes.types';
import { lightThemeValues, darkThemeValues } from './themes.data';

const INITIAL_STATE = {
  colors: lightThemeValues,
  isCurrentThemesDark: false,
};

const themesReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case themesActionTypes.TURN_DARK_THEMES:
      return {
        ...state,
        isCurrentThemesDark: !state.isCurrentThemesDark,
        colors: darkThemeValues,
      };
    case themesActionTypes.TURN_LIGHT_THEMES:
      return {
        ...state,
        isCurrentThemesDark: !state.isCurrentThemesDark,
        colors: lightThemeValues,
      };
    default:
      return state;
  }
}

export default themesReducer;