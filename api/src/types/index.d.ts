export interface IGenreAPI {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
    games: Array<{
        id: number
        slug: string
        name: string
        added: number
    }>
}

export interface IGenre {
    id: number
    name: string
}

export interface IVideogame {
    id?: number
    name: string
    description: string
    background_image?: string | undefined
    genres?: Genres[]
    rating: number
    platforms: Platform[]
    released: Date
}

export type PlatformName =
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
export interface Platform {
    platform: {
        id: number
        name: PlatformName
    }
}

export interface Genres {
    name: PlatformName
}

export interface IError {
    status: number
    message: string
}
