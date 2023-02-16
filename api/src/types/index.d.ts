export interface IGenre {
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

export interface IVideogame {
    id: number
    description?: string
    released?: string
    name: string
    genres: Array<{
        name: string
    }>
    background_image: string
    rating: number
    platforms: Array<{
        platform: {
            id: number
            name: string
        }
    }>
}

export interface IError {
    status: number
    message: string
}
