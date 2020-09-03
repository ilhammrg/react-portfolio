import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectNavPosition = createSelector(
    [selectMenu],
    menu => menu.navPosition
);