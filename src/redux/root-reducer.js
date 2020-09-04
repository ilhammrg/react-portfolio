import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import menuReducer from './menu/menu.reducer';
import appReducer from './app/app.reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['menu', 'app']
};

const rootReducer = combineReducers({
    menu: menuReducer,
    app: appReducer
});

export default persistReducer(persistConfig, rootReducer);