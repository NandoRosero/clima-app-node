const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lng}&units=metric&appid=cdbca9c7c0cc432f9abe3b4f1be20c24`)

    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}