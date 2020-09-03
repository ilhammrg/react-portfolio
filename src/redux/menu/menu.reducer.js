import menuActionTypes from './menu.types';

const INITIAL_STATE = {
    isNavOpen: false,
    navPosition: 'translate(0,-100vh)'
};

const menuReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case menuActionTypes.OPEN_NAV_MENU:
            return {
                ...state,
                isNavOpen: !(state.isNavOpen),
                navPosition: action.payload
            };
        case menuActionTypes.CLOSE_NAV_MENU:
            return {
                ...state,
                isNavOpen: !(state.isNavOpen),
                navPosition: action.payload
            };
        default:
            return state;
    };
};

export default menuReducer;