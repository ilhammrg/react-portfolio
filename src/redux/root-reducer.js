import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themesReducer from './themes/themes.reducer';
import projectsReducer from './projects/projects.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['projects'],
};

const rootReducer = combineReducers({
  themes: themesReducer,
  projects: projectsReducer,
});

export default persistReducer(persistConfig, rootReducer);
