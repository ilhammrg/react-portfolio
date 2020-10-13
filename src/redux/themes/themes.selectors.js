import { createSelector } from 'reselect';

const selectThemes = state => state.themes;

export const selectColors = createSelector(
  [selectThemes],
  themes => themes.colors,
);

export const selectIsCurrentThemesDark = createSelector(
  [selectThemes],
  themes => themes.isCurrentThemesDark,
);
