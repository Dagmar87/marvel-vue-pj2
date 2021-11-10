import axios from 'axios'

const urlBaseMarvel = 'http://gateway.marvel.com/v1/public/'
const apiKey = '464625242dfc352955f6e4ff0087ced5'
const ts = '1636545428'
const hash = '562b0c0c87b51450807ece7697715712'

export default {
  getAllComics: (limit, callback) => {
    const urlComics = urlBaseMarvel + 'comics?ts=' + ts + '&apikey=' + apiKey + '&hash=' + hash + '&limit=' + limit
    axios.get(urlComics).then((comics) => {
      if (callback) {
        callback(comics)
      }
    })
  }
}
