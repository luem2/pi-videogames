<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<!-- PROJECT LOGO -->

<br />

<div align="center">
  <a href="https://github.com/luem2/pi-videogames">
    <img src="./client/public/favicon.ico" alt="Logo" width="150" height="150">
  </a>

<h1 align="center">Henry Games</h1>

  <p align="center">
    Individual project done at Henry's Bootcamp, is an application to search and create game information, filter by name, rating, genre and origin.
    <br />
    <a href="https://github.com/Luem2/pi-videogames/blob/main/SPANISH-README.md"><strong>Explore the docs in spanish »</strong></a>
    <br />
    <br />
    <a href="https://henrygames.lucianopinol.com">View Demo</a>
    ·
    <a href="https://github.com/luem2/pi-videogames/issues">Report Bug</a>
    ·
    <a href="https://github.com/luem2/pi-videogames/issues">Request Feature</a>
    .
    <a href='#deploy-with-docker'>Try it with Docker!</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

# Table of Contents

-   [Table of Contents](#table-of-contents)
-   [About The Project](#about-the-project)
    -   [Introduction](#introduction)
    -   [Project goals:](#project-goals)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
    -   [API:](#api)
        -   [Swagger Docs:](#swagger-docs)
    -   [Client:](#client)
-   [Deploy with Docker](#deploy-with-docker)
    -   [Prerequisites](#prerequisites-1)
    -   [Installation](#installation-1)
-   [Usage the project running with Docker](#usage-the-project-running-with-docker)
-   [License](#license)
-   [Contact](#contact)

<!-- ABOUT THE PROJECT -->

<br />

# About The Project

[![Henry Games Screenshot][product-screenshot]](https://henrygames.lucianopinol.com)

### Introduction

Henry Games its a Individual project done at Henry's Bootcamp, is an application to search and create game information, filter by name, rating, genre and origin.

> Check the `live demo`: [https://henrygames.lucianopinol.com/](https://henrygames.lucianopinol.com)

The general idea is to create an application in which you can see the different videogames available along with relevant information about them using the [RAWG](https://rawg.io/apidocs) external api and from it, among other things:

-   Search video games
-   Filter / Sort them
-   Add new video games
-   Modify the created games
-   Delete the created games

### Project goals:

-   Build an app using: `HTML`, `CSS`, `Typescript`, `React`, `Redux`, `Node`, `Express`, `Postgres`, `Sequelize`, `Docker` y `Swagger` for api documentation.
-   Affirm and connect the concepts learned in the degree, and implement new technologies.
-   Learn best practices
-   Learn and practice the `GIT` workflow.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

-   [![Html][html]][html-url]
-   [![Css][css]][css-url]
-   [![Typescript][typescript]][typescript-url]
-   [![React][react]][react-url]
-   [![Redux][redux]][redux-url]
-   [![Node][node]][node-url]
-   [![Express][express]][express-url]
-   [![Postgres][postgres]][postgres-url]
-   [![Sequelize][sequelize]][sequelize-url]
-   [![Docker][docker]][docker-url]
-   [![Swagger][swagger]][swagger-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

To get a local copy up and running follow these simple example steps.

## Prerequisites

It is necessary to have at least the latest stable version of [Node](https://nodejs.org/es/) and the [PNPM](https://pnpm.io/es/) package manager. Make sure you have it in order to correctly install the dependencies needed to run the project. Follow the guides of the links for its installation.

-   Check if they are _installed_, run the following commands to see their version:
    <br />
    `node --version`
    <br />
    `pnpm --version`

    Output example:

    ```sh
    node --version
    V18.14.2

    pnpm --version
    V7.21.1
    ```

## Installation

1. **Clone the repo**

    ```sh
    git clone https://github.com/luem2/pi-videogames.git
    ```

2. **Get a free API Key** at [https://rawg.io/apidocs](https://rawg.io/apidocs)

3. **Create an `.env` file** in the root of `api` folder. The file will look like this (an example file `.env.example` is in the api folder):

    ```js
    API_KEY=*YOU_API_KEY*
    PORT=3000
    NODE_ENV=development

    DB_NAME=videogames
    DB_USER=postgres
    DB_PASSWORD=password123
    DB_HOST=localhost
    DB_PORT=5432
    ```

4. **Enter to the root directory** `pi-videogames` and install the backend (`api` folder) and frontend (`client` folder) dependencies:

    ```sh
    pnpm install
    ```

5. **Run the project**:

    > **Option 1** (`Dev Mode`):
    > <br />
    > In the `Dev Mode` enter the respective frontend and backend folders and run the following command:

    ```sh
    pnpm dev
    ```

    > **Option 2** (`Preview or Production Mode`):
    > <br />
    > In the `Preview or Production Mode` compile first and then run the server

    In the `API` folder:

    ```sh
    pnpm build
    pnpm start
    ```

    In `CLIENT` folder:

    ```sh
    pnpm build
    pnpm preview
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

# Usage

## API:

### Swagger Docs:

-   You will find all the endpoints, what they do, what they return and all the information related to the backend and the database:

See the docs in development:

> `DEVELOPMENT`: http://localhost:3000/

See the docs in production:

> `PRODUCTION`: https://api-pi-videogames.pinol.site/

## Client:

-   You can interact with the functionalities of the project, in the following links:

Running the project in development:

> `DEVELOPMENT`: http://localhost:8080/

Running the project in development, with docker:

> `DEVELOPMENT WITH DOCKER`: http://localhost:4173/

See the project in production:

> `PRODUCTION`: https://henrygames.lucianopinol.com/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPLOY WITH DOCKER -->

# Deploy with Docker

To run this application in Docker, follow the below steps:

## Prerequisites

It is necessary to have [docker](https://docs.docker.com/engine/install/) and [docker compose](https://docs.docker.com/compose/) installed. Make sure you have them installed, follow the installation guide on the official page.

-   Check if they are _installed_, run the following commands to see their version:
    <br />
    `docker --version`
    <br />
    `docker compose version`

    Output example:

    ```sh
    - docker --version
    Docker version 23.0.1, build a5ee5b1

    - docker compose version
    Docker Compose version v2.16.0
    ```

## Installation

1. **In the root of the project folder `pi-videogames`** run the following command, and wait for the installation to finish:

    ```sh
    docker compose build
    ```

2. **Run the following command** to pull up all the services described in the docker-compose.yml file.

    ```sh
    docker compose up -d
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

# Usage the project running with Docker

The client running inside a docker container will run on host `http://localhost:4173/` while the other way around it will run on host `http://localhost:8080/`. The backend and database configuration is the same.

<!-- LICENSE -->

<br />

# License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

# Contact

-   Linkedin: [https://linkedin.com/in/lucianopinol](https://linkedin.com/in/lucianopinol)
-   Telegram: [@Luem02](https://t.me/luem02)
-   Email: dev@lucianopinol.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/luem2/pi-videogames.svg?style=for-the-badge
[contributors-url]: https://github.com/luem2/pi-videogames/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/luem2/pi-videogames.svg?style=for-the-badge
[forks-url]: https://github.com/luem2/pi-videogames/network/members
[stars-shield]: https://img.shields.io/github/stars/luem2/pi-videogames.svg?style=for-the-badge
[stars-url]: https://github.com/luem2/pi-videogames/stargazers
[issues-shield]: https://img.shields.io/github/issues/luem2/pi-videogames.svg?style=for-the-badge
[issues-url]: https://github.com/luem2/pi-videogames/issues
[license-shield]: https://img.shields.io/github/license/luem2/pi-videogames.svg?style=for-the-badge
[license-url]: https://github.com/luem2/pi-videogames/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lucianopinol
[product-screenshot]: ./client/src/assets/henrygames.png
[html]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://https://developer.mozilla.org/es/docs/Web/HTML
[css]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/es/docs/Web/CSS
[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[react]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[redux]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[redux-url]: https://redux-toolkit.js.org/
[node]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/es/
[express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express-url]: https://expressjs.com/es/
[postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[postgres-url]: https://www.postgresql.org/
[sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[sequelize-url]: https://sequelize.org/
[docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://docker.com
[swagger]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/tools/swagger-ui/
