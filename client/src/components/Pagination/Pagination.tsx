import type { IVideogame } from 'src/types'

import Loader from '../Loader/Loader'

import style from './Pagination.module.css'

interface Props {
    videogamesPerPage: number
    allVideogames: IVideogame[]
    paginate: (pageNumber: number) => void
    currentPage: number
}

const Pagination = ({
    videogamesPerPage,
    allVideogames,
    paginate,
    currentPage,
}: Props): JSX.Element => {
    const pageNumbers = []

    for (
        let i = 1;
        i <= Math.ceil(allVideogames.length / videogamesPerPage);
        i++
    ) {
        pageNumbers.push(i)
    }

    return (
        <nav className={style.container}>
            <ul className={style.page}>
                {pageNumbers ? (
                    pageNumbers.map((number) => {
                        const activePage = (): string => {
                            if (number === currentPage) {
                                return style.isActive
                            } else return ''
                        }

                        return (
                            <li key={number} className={style.number}>
                                <button
                                    className={`${
                                        style.botoncito
                                    } ${activePage()}`}
                                    onClick={() => {
                                        paginate(number)
                                    }}
                                >
                                    {number}
                                </button>
                            </li>
                        )
                    })
                ) : (
                    <Loader />
                )}
            </ul>
        </nav>
    )
}

export default Pagination
