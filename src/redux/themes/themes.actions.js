import themesActionTypes from './themes.types';

export const turnLightThemes = () => {
  return {
    type: themesActionTypes.TURN_LIGHT_THEMES,
  };
};

export const turnDarkThemes = () => {
  return {
    type: themesActionTypes.TURN_DARK_THEMES,
  };
};
