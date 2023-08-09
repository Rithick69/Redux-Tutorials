// For store setup we will use configureStore.
// configureStore accepts a single configuration object parameter.

import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/UserSlice';

// Will be integrating Redux Persist with this store in future, WIP.

// import { persistStore, persistReducer } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// };

const store = configureStore({
	// Here reducer will act as combined reducer where we will switch between
	// slices to access the reducers that we want to work with.
	reducer: {
		users: userSlice,
	},
});

export default store;
