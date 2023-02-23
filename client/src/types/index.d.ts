export interface ButtonProps {
    content: React.ReactNode
    type: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
    image?: string | null
}

export interface IErrors {
    name?: string
    description?: string
    genres?: string
    rating?: string
    released?: string
    platforms?: string
}

export interface IAction {
    type: string
    payload: Record
}

export interface IInitialState {
    videogames: IVideogame[]
    currentPage: number
    filteredVideogames: IVideogame[]
    videogameDetails: IVideogame | Record<string>
    genres: string[]
}

export interface IGenre {
    id: number
    name: GenresName
    videogameId: number
}

export interface IVideogame {
    id: number
    name: string | undefined
    description?: string
    released: Date | string
    background_image: string | undefined
    genres: GenresName[] | IGenre[]
    rating: number
    platforms: string[] | PlatformsName[]
}

export interface Platform {
    id: number
    name: PlatformName
}

export type GenresName =
    | 'Action'
    | 'Indie'
    | 'Adventure'
    | 'RPG'
    | 'Strategy'
    | 'Shooter'
    | 'Casual'
    | 'Simulation'
    | 'Puzzle'
    | 'Arcade'
    | 'Platformer'
    | 'Racing'
    | 'Massively Multiplayer'
    | 'Sports'
    | 'Fighting'
    | 'Family'
    | 'Board Games'
    | 'Educational'
    | 'Card'

export type PlatformsName =
    | 'Android'
    | 'Dreamcast'
    | 'iOS'
    | 'Linux'
    | 'macOS'
    | 'Nintendo 3DS'
    | 'Nintendo Switch'
    | 'PC'
    | 'PS Vita'
    | 'PlayStation 2'
    | 'PlayStation 3'
    | 'PlayStation 4'
    | 'PlayStation 5'
    | 'Web'
    | 'Wii U'
    | 'Xbox'
    | 'Xbox 360'
    | 'Xbox One'
    | 'Xbox Series S/X'
