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
  Proyecto individual hecho en el Bootcamp de Henry, es una aplicación para buscar y crear informacion de juegos, filtrar por nombre, puntuación, género y origen.
    <br />
    <a href="https://github.com/Luem2/pi-videogames/blob/main/README.md"><strong>Explore los documentos en inglés »</strong></a>
    <br />
    <br />
    <a href="https://henrygames.lucianopinol.com">Ver Demo</a>
    ·
    <a href="https://github.com/luem2/pi-videogames/issues">Reportar fallo</a>
    ·
    <a href="https://github.com/luem2/pi-videogames/issues">Requerir funcionalidad</a>
    .
    <a href='#despliegue-con-docker'>Pruebalo con Docker!</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

# Tabla de Contenido

-   [Tabla de Contenido](#tabla-de-contenido)
-   [Acerca del Proyecto](#acerca-del-proyecto)
    -   [Introducción](#introducción)
    -   [Objetivos del Proyecto:](#objetivos-del-proyecto)
    -   [Construido con](#construido-con)
-   [Empezando](#empezando)
    -   [Requisitos Previos](#requisitos-previos)
    -   [Instalación](#instalación)
-   [Uso](#uso)
    -   [API:](#api)
        -   [Documentación con Swagger](#documentación-con-swagger)
    -   [Cliente:](#cliente)
-   [Despliegue con Docker](#despliegue-con-docker)
    -   [Requisitos previos](#requisitos-previos-1)
    -   [Instalación](#instalación-1)
-   [Usando el proyecto con Docker](#usando-el-proyecto-con-docker)
-   [Licencia](#licencia)
-   [Contacto](#contacto)

<!-- ABOUT THE PROJECT -->

<br />

# Acerca del Proyecto

[![Henry Games Screenshot][product-screenshot]](https://henrygames.lucianopinol.com)

### Introducción

Henry games es un proyecto individual hecho en el Bootcamp de Henry, es una aplicación para buscar y crear información de juegos, filtrar por nombre, puntuación, género y origen.

> Visitar la `demo en vivo`: [https://henrygames.lucianopinol.com/](https://henrygames.lucianopinol.com)

La idea general es crear una aplicación en la que se puedan ver los diferentes videojuegos disponibles junto con información relevante sobre los mismos utilizando la api externa [RAWG](https://rawg.io/apidocs) y desde ella, entre otras cosas:

-   Buscar videojuegos
-   Filtrarlos
-   Añadir nuevos videojuegos
-   Modificar los juegos creados
-   Eliminar los juegos creados

### Objetivos del Proyecto:

-   Construir la aplicación usando: `HTML`, `CSS`, `Typescript`, `React`, `Redux`, `Node`, `Express`, `Postgres`, `Sequelize`, `Docker` y `Swagger` para la documentación de la API.
-   Afirmar y conectar los conceptos aprendidos en la carrera, e implementar nuevas tecnologías.
-   Aprender mejores prácticas
-   Aprender y practicar el flujo de trabajo de `GIT`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Construido con

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

# Empezando

Para obtener una copia local en funcionamiento, siga estos sencillos pasos de ejemplo.

## Requisitos Previos

Es necesario tener al menos la última versión estable de [Node](https://nodejs.org/es/) y el gestor de paquetes [PNPM](https://pnpm.io/es/). Asegúrese de tenerlo para instalar correctamente las dependencias necesarias para ejecutar el proyecto. Siga las guías de los enlaces para su instalación.

-   Comprueba si están _instalados_, ejecuta los siguientes comandos para ver su versión:
    <br />
    `node --version`
    <br />
    `pnpm --version`

    Ejemplo de la salida:

    ```sh
    node --version
    V18.14.2

    pnpm --version
    V7.21.1
    ```

## Instalación

1. **Clonar el repositorio**

    ```sh
    git clone https://github.com/luem2/pi-videogames.git
    ```

2. **Obtener una clave API** at [https://rawg.io/apidocs](https://rawg.io/apidocs)

3. **Crear un archivo `.env`** en la raiz de la carpeta `api`. El archivo se verá así (un archivo de ejemplo `.env.example` está en la carpeta api):

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

4. **Entrar a la raíz de la carpeta** `pi-videogames` e instalar las dependencias del backend (carpeta `api`) y del frontend (carpeta `client`).

    ```sh
    pnpm install
    ```

5. **Ejecutar el proyecto**:

    > **Opción 1** (`Modo desarrollo`):
    > <br />
    > En el `Modo desarrollo` ingrese en las respectivas carpetas frontend y backend, y ejecute el siguiente comando:

    ```sh
    pnpm dev
    ```

    > **Opción 2** (`Modo producción`):
    > <br />
    > En el `Modo producción` compile primero y luego corra el servidor.

    En la carpeta `API`:

    ```sh
    pnpm build
    pnpm start
    ```

    En la carpeta `CLIENT`:

    ```sh
    pnpm build
    pnpm preview
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

# Uso

## API:

### Documentación con Swagger

-   Encontrarás todos los endpoints, qué hacen, qué devuelven y toda la información relacionada con el backend y la base de datos:

Ver la documentación en desarrollo:

> `DESARROLLO`: http://localhost:3000/

Ver la documentación en producción:

> `PRODUCCIÓN`: https://api-pi-videogames.pinol.site/

## Cliente:

-   Puedes interactuar con las funcionalidades del proyecto, en los siguientes enlaces:

Ejecutando el proyecto en desarrollo:

> `DESARROLLO`: http://localhost:8080/

Ejecutando el proyecto en desarrollo, con docker:

> `DESARROLLO CON DOCKER`: http://localhost:4173/

Ver el proyecto en producción:

> `PRODUCCIÓN`: https://henrygames.lucianopinol.com/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPLOY WITH DOCKER -->

# Despliegue con Docker

Para ejecutar esta aplicación en Docker, siga los siguientes pasos:

## Requisitos previos

Es necesario tener [docker](https://docs.docker.com/engine/install/) y [docker compose](https://docs.docker.com/compose/) instalados. Asegúrate de tenerlos instalados, sigue la guía de instalación en la página oficial.

-   Comprueba si están _instalados_, ejecuta los siguientes comandos para ver su versión:
    <br />
    `docker --version`
    <br />
    `docker compose version`

    Ejemplo de la salida:

    ```sh
    - docker --version
    Docker version 23.0.1, build a5ee5b1

    - docker compose version
    Docker Compose version v2.16.0
    ```

## Instalación

1. **En la raíz de la carpeta del proyecto `pi-videogames`** ejecute el siguiente comando y espere a que finalice la instalación:

    ```sh
    docker compose build
    ```

2. **Ejecute el siguiente comando** para ejecutar todos los servicios descritos en el archivo docker-compose.yml.

    ```sh
     docker compose up -d
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

# Usando el proyecto con Docker

El cliente que se ejecuta dentro de un contenedor docker se ejecutará en el host `http://localhost:4173/` mientras que de la otra manera se ejecutará en el host `http://localhost:8080/`. La configuración del backend y de la base de datos es la misma.

<!-- LICENSE -->

<br />

# Licencia

Distribuido bajo la licencia MIT. Consulte `LICENSE` para obtener más información.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

# Contacto

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
