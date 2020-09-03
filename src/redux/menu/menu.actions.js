import menuActionTypes from './menu.types';

export const openNavMenu = navPosition => {
    return {
        type: menuActionTypes.OPEN_NAV_MENU,
        payload: navPosition
    };
};

export const closeNavMenu = navPosition => {
    return {
        type: menuActionTypes.CLOSE_NAV_MENU,
        payload: navPosition
    };
};