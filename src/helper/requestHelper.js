const axiosHelper = require('./axiosHelper')

async function getJoke(req, res){
    console.log("API call has been made for /randomjoke")
    axiosHelper.getJoke().then( response => {
        console.log("Sucess: Response recieved for getJoke")
        res.status(200).send(response)
    }).catch(err => {
        console.log("Error occured in Request Helper: getJoke")
        res.status(500).send(err)
    })
}

module.exports = {
    getJoke: getJoke
}