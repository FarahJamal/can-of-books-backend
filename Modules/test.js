'use strict';
require('dotenv').config();
const superagent = require('superagent');
const apiKey = 'ygSA8huQqcRy8rcyvE2kcPpGrGoDcnMEThiJWmNsyVZwIIffUuaUtMIEVP1voPJ2oEz_3IfVOtpgC6zCpw6b3vzAxhlJEom4G9z7bNv666NgLjLgkcuH_d35iMcTYXYx';



function restaurant(req, res) {
    let { cityName } = req.query;
  
        const url = `https://api.yelp.com/v3/businesses/search?location=${cityName}`;
        axios
        .get(url)
        .set('Authorization', `Bearer ${apiKey}`)
        .then(resp => {
                console.log(resp)
                
            })
        .catch(err=>{
                console.log(err)
            })
        }


module.exports = restaurant;