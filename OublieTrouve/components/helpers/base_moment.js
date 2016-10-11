import PromisedLocation from 'promised-location';
import { weatherID }    from './credentials';


export default class BaseMoment {
  constructor(){
    // kick off api calls
    let date = new Date();
    this.home = {
      longitude: '-73.92112375618241',
      latitude: '40.70915962617131',
    };

    this.title = date.toString().split(' ').slice(0, 5).join(', ');
    this.description = '';

    this.distance_from_home = 9999;
    this.posted = date;
    this.id = 9999;
    this.complete = false;
    this.conx = [];
  }

  populate() {
    console.log('in populate');
    return this._getLocation()
      .then((position) => {
        // set position-revelant values
        let coords   = position.coords,
            longDiff = Math.abs(this.home.longitude - coords.longitude),
            latDiff  = Math.abs(this.home.latitude - coords.latitude);
        this.elevation = this.elevation || coords.altitude; // only assign if not set before
        this.distance_from_home = Math.sqrt(Math.pow(longDiff, 2) + Math.pow(latDiff, 2));
        return coords;
      })
      .then((coords) => {
        // get weather-related values and add them to the entry
        return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${weatherID}`)
          .then((response) => response.json())
          .then((responseJson) => {
              this.temp = responseJson.main.temp;
              this.humidity = responseJson.main.humidity;
              this.weather = responseJson.weather[0];
              this.complete = true;
              return this;
            })
          .catch((error) => {
            // set values presuming underground
            this.elevation = -100;
            this.distance_from_home = -100;
            this.underground = true;
            this.message = { msg: error }
            return this;
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