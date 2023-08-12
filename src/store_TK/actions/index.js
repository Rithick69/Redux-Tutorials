import { createAction } from '@reduxjs/toolkit';

// Defining action type with the help of createAction.

// If a reducer isn't present in the parent slice for extraReducer,
// then we will fix this by exporting a action created using createAction.

export const clearAll = createAction('clearAll');
