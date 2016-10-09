'use strict'

exports.handle = function handle(client) {

const collectCity = client.createStep({
  satisfied() {
    return Boolean(client.getConversationState().weatherCity)
  },

  prompt() {
    // Need to prompt user for city    
    console.log('Need to ask user for city')
    client.done()
  },
})

const provideWeather = client.createStep({
  satisfied() {
    return false
  },

  prompt() {
    // Need to provide weather
    client.done()
  },
})

client.runFlow({
  classifications: {},
  streams: {
    main: 'getWeather',
    getWeather: [collectCity, provideWeather],
  }
})
  
}
