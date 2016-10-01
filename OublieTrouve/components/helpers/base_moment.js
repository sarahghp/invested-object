import PromisedLocation from 'promised-location';
import { weatherID }    from './credentials';


export default class BaseMoment {
  constructor(){
    // kick off api calls
    let date = new Date();

    this.title = date.toString().split(' ').slice(0, 5).join(', ');
    this.description = '';

    this.distance_from_home = _.random(2, 200);
    this.posted = date;
    this.id = 9999;
    this.complete = false;
  }

  populate() {
    return this._getLocation()
      .then((position) => {
        console.log('locator', position.coords);
        this.elevation = position.coords.altitude;
        return position.coords;
      })
      .then((coords) => {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${weatherID}`)
          .then((response) => response.json())
          .then((responseJson) => {
              console.log('populate', responseJson);
              this.temp = responseJson.main.temp;
              this.humidity = responseJson.main.humidity;
              this.weather = responseJson.weather[0];
              this.complete = true;
              return responseJson;
            })
          .catch((error) => {
            console.error(error);
          });
      });
  }

  _getLocation() {
    let options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
    };
     
    let locator = new PromisedLocation(options);

    locator
      .catch(function (err) {
        console.error('Position Error ', err.toString());
      });

    return locator;
  }

}