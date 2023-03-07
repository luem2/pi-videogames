import type { OAS3Definition, OAS3Options } from 'swagger-jsdoc'

import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition: OAS3Definition = {
    openapi: '3.0.3',
    info: {
        title: 'Henry Games API',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development Environment API',
        },
        {
            url: 'https://api-henrygames.pinol.site',
            description: 'Production Environment API',
        },
    ],
    components: {
        schemas: {
            Genre: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        format: 'serial4',
                        example: 10,
                    },
                    name: {
                        type: 'string',
                        format: 'varchar(255)',
                        example: 'Arcade',
                    },
                    VideogameGenre: {
                        $ref: '#/components/schemas/VideogameGenre',
                    },
                },
            },
            Videogame: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        format: 'uuid',
                        example: 'ab55cb1c-05bc-434e-8d0e-6086986b4441',
                    },
                    name: {
                        type: 'string',
                        format: 'varchar(255)',
                        example: 'League of Henrys',
                    },
                    description: {
                        type: 'string',
                        format: 'text',
                        example: 'The best game of the world',
                    },
                    background_image: {
                        type: 'string',
                        format: 'text',
                        example:
                            'https://i.blogs.es/f00b44/screenshot_699/840_560.jpeg',
                    },
                    released: {
                        type: 'string',
                        format: 'varchar(255)',
                        example: '02-08-2020',
                    },
                    rating: {
                        type: 'number',
                        format: 'float8',
                        example: '5',
                    },
                    platforms: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        example: ['PC', 'PlayStation 4', 'Xbox One'],
                    },
                    genres: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Genre',
                        },
                    },
                },
            },
            VideogameGenre: {
                type: 'object',
                properties: {
                    genreId: {
                        type: 'number',
                        $ref: '#/components/schemas/Genre',
                    },
                    videogameId: {
                        $ref: '#/components/schemas/Videogame',
                    },
                },
            },
        },
    },
}

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ['./src/routes/*.route.ts'],
}

export default swaggerJSDoc(swaggerOptions)
