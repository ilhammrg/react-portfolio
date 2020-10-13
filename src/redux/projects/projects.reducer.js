import projectsData from './projects.data';

const INITIAL_STATE = {
  ...projectsData
};

const projectsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state;
  }
};

export default projectsReducer;
