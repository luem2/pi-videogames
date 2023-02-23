import type { Action, ThunkAction } from '@reduxjs/toolkit'

import { configureStore } from '@reduxjs/toolkit'

import modalSlice from './modal.slice'
import videogameSlice from './videogame.slice'

export const store = configureStore({
    reducer: {
        videogames: videogameSlice,
        modal: modalSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
