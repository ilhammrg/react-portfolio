import appActionTypes from './app.types';

export const switchDarkMode = () => {
    return {
        type: appActionTypes.SWITCH_DARK_MODE
    };
};

export const switchLightMode = () => {
    return {
        type: appActionTypes.SWITCH_LIGHT_MODE
    };
};