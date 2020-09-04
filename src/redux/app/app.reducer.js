import appActionTypes from './app.types';
import { changeToDarkMode, changeToLightMode } from './app.utils';

const INITIAL_STATE = {
    isDarkModeActive: false,
    globalStyles: changeToLightMode()
};

const appReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case appActionTypes.SWITCH_DARK_MODE:
            return {
                ...state,
                isDarkModeActive: !(state.isDarkModeActive),
                globalStyles: changeToDarkMode()
            };
        case appActionTypes.SWITCH_LIGHT_MODE:
            return {
                ...state,
                isDarkModeActive: !(state.isDarkModeActive),
                globalStyles: changeToLightMode()
            };
        default:
            return state;
    };
};

export default appReducer;