const axios = require('axios')

const config = require('../config/config.json')

module.exports = {
     getJoke: async() => {
        return new Promise(async (resolve, reject) => {
            try{
                console.log("AxiosHelper: getJoke function has been called")
                let requestUrl = config.joke.url + config.joke.endPoint
                let response = await axios.get(requestUrl)
                resolve(response.data)
            }catch(error){
                console.log("Error occured in AxiosHelper: getJoke")
                reject(error)
            }
        })
    }
}