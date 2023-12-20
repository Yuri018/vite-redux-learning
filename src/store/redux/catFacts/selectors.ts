import {createSelector} from '@reduxjs/toolkit'

import {RootState} from 'store/store';

const store = (state: RootState) => state

export const catFactSelector = createSelector(store, (state)=> state.catFacts)
