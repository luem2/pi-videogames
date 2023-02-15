import Genre from './Genre'
import Videogame from './Videogame'

Videogame.belongsToMany(Genre, {
    through: 'Videogame_Genres',
})

Genre.belongsToMany(Videogame, {
    through: 'Videogame_Genres',
})

export { Videogame, Genre }
