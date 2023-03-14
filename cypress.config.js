module.exports = {
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile:false, // Evitar error si no existe carpeta /support   
  },
  chromeWebSecurity:false,   // Para https en Chrome
}
