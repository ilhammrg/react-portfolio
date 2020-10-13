import { createSelector } from 'reselect';

const selectProjects = state => state.projects;

export const selectProjectsData = createSelector(
  [selectProjects],
  projects => projects.data
);
