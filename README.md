[![Deployment Pipeline](https://github.com/midudev/pokedex-for-ci/actions/workflows/pipeline.yml/badge.svg)](https://github.com/midudev/pokedex-for-ci/actions/workflows/pipeline.yml)

# Full Stack open CI/CD

Aplicacion Backend Node  app.js:
  - Lanza un html server con la app frontend react en dist/index.html
  - Algunos endpoints informativos

Aplicacion Frontend React:  dist/index.html + bundle.js
      Presenta en pantalla una coleccion de fichas de pokemonss

GitHub Actions: en .github/workflows:  
    pipeline.yml    Evento push, lanza test con jest y cypress y deploy


## Commands

Start by running `npm install` inside the project folder

`npm dev` to run the webpack dev server, app react en localhost:8080
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build
