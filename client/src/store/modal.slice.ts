import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
    emptyInput: boolean
    gameNotFound: boolean
    gameCreated: boolean
    areYouSure: boolean
    editGame: boolean
    deletedGame: boolean
    videogameExists: boolean
    gameNotChanged: boolean
}

const initialState: IInitialState = {
    emptyInput: false,
    gameNotFound: false,
    gameCreated: false,
    areYouSure: false,
    editGame: false,
    deletedGame: false,
    videogameExists: false,
    gameNotChanged: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        emptyInputModal: (state, action) => {
            state.emptyInput = action.payload
        },

        gameNotFoundModal: (state, action) => {
            state.gameNotFound = action.payload
        },

        gameCreatedModal: (state, action) => {
            state.gameCreated = action.payload
        },

        areYouSureModal: (state, action) => {
            state.areYouSure = action.payload
        },

        editGameModal: (state, action) => {
            state.editGame = action.payload
        },

        deletedGameModal: (state, action) => {
            state.deletedGame = action.payload
        },

        videogameExistsModal: (state, action) => {
            state.videogameExists = action.payload
        },

        gameNotChangedModal: (state, action) => {
            state.gameNotChanged = action.payload
        },
    },
})

export const {
    areYouSureModal,
    deletedGameModal,
    editGameModal,
    emptyInputModal,
    gameCreatedModal,
    gameNotChangedModal,
    gameNotFoundModal,
    videogameExistsModal,
} = modalSlice.actions

export default modalSlice.reducer
