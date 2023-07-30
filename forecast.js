
const request = require ('request')

const forecast = (latitude , longtitude , callback ) => {

  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/jordan.json?access_token=pk.eyJ1IjoiaGFpZmEtOTkyIiwiYSI6ImNsa2sxaWt4aTExdW4zY2tnZnhiNzRoZmEifQ="+ latitude + "," + longtitude
  
  request ({url, json : true} , (error , response) => {
       
      if(error) {
           callback ("Unable to connect weather service" , undefined)
      } else if(response.body.error){
           callback (response.body.error.message , undefined)
      } else {
              callback (undefined , response.body.location.name + ' It Is  ' + response.body.current.condition.text 
              + " And Temp   " + response.body.current.temp_c    )
      }
  })
  }

module.exports = forecast;