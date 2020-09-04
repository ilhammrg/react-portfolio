import { createSelector } from 'reselect';

const selectApp = state => state.app;

export const selectGlobalStyles = createSelector(
    [selectApp],
    app => app.globalStyles
);

export const selectIsDarkModeActive = createSelector(
    [selectApp],
    app => app.isDarkModeActive
);